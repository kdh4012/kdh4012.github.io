/**
 * 자격증 PDF 암호화 스크립트 (로컬 전용, 원본 PDF는 커밋하지 않는다)
 *
 * 사용법:
 *   node tools/encrypt-certs.mjs <원본폴더>
 *   - 비밀번호는 환경변수 CERT_PASSWORD 또는 실행 중 프롬프트로 입력
 *   - <원본폴더>/<이름>.pdf → assets/certificates/<이름>.pdf.enc
 *
 * 파일 포맷 (main.js 의 복호화와 반드시 일치해야 함):
 *   [ "CERT1"(5B) | salt(16B) | iv(12B) | AES-256-GCM 암호문 + tag(16B) ]
 *   키 = PBKDF2-SHA256(password, salt, ITERATIONS) → 256bit
 */
import { readdir, readFile, writeFile, mkdir } from "node:fs/promises";
import { join, basename } from "node:path";
import { createInterface } from "node:readline/promises";
import { webcrypto as crypto } from "node:crypto";

const MAGIC = new TextEncoder().encode("CERT1");
const ITERATIONS = 600000; // OWASP 2023 권장값 (PBKDF2-SHA256)
const OUT_DIR = "assets/certificates";

async function deriveKey(password, salt) {
  const base = await crypto.subtle.importKey("raw", new TextEncoder().encode(password), "PBKDF2", false, ["deriveKey"]);
  return crypto.subtle.deriveKey(
    { name: "PBKDF2", hash: "SHA-256", salt, iterations: ITERATIONS },
    base,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt", "decrypt"]
  );
}

async function encrypt(plain, password) {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const key = await deriveKey(password, salt);
  const cipher = new Uint8Array(await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, plain));
  return Buffer.concat([MAGIC, salt, iv, cipher]);
}

async function decrypt(buf, password) {
  const m = MAGIC.length;
  const key = await deriveKey(password, buf.subarray(m, m + 16));
  return Buffer.from(await crypto.subtle.decrypt({ name: "AES-GCM", iv: buf.subarray(m + 16, m + 28) }, key, buf.subarray(m + 28)));
}

async function readPassword() {
  if (process.env.CERT_PASSWORD) return process.env.CERT_PASSWORD;
  const rl = createInterface({ input: process.stdin, output: process.stdout });
  const pw = await rl.question("비밀번호: ");
  rl.close();
  return pw;
}

const srcDir = process.argv[2];
if (!srcDir) {
  console.error("사용법: node tools/encrypt-certs.mjs <원본 PDF 폴더>");
  process.exit(1);
}
const password = await readPassword();
if (password.length < 8) {
  console.error("비밀번호는 8자 이상이어야 합니다.");
  process.exit(1);
}

await mkdir(OUT_DIR, { recursive: true });
const pdfs = (await readdir(srcDir)).filter((f) => f.toLowerCase().endsWith(".pdf"));
for (const f of pdfs) {
  const plain = await readFile(join(srcDir, f));
  const enc = await encrypt(plain, password);
  // 왕복 검증: 복호화 결과가 원본과 바이트 단위로 같아야 저장
  if (!(await decrypt(enc, password)).equals(plain)) throw new Error(`검증 실패: ${f}`);
  const out = join(OUT_DIR, `${basename(f)}.enc`);
  await writeFile(out, enc);
  console.log(`${f} → ${out} (${enc.length} bytes, 검증 OK)`);
}

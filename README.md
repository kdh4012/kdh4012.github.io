# Portfolio

GitHub Pages용 정적 포트폴리오. 빌드 도구 없이 HTML/CSS/JS만 사용한다.

## 구조

| 파일 | 역할 |
|---|---|
| `data.js` | 모든 콘텐츠(프로필·경력·프로젝트 등). **이 파일만 수정하면 된다.** |
| `index.html` | 레이아웃 뼈대 |
| `main.js` | `data.js` → 화면 렌더링, 테마 전환, 스크롤 내비 |
| `style.css` | 스타일 (라이트/다크, 모바일, 인쇄) |

- 값이 비었거나 배열이 비면 해당 항목·섹션·내비 링크가 자동으로 숨겨진다.
- 프로필 사진·이력서 PDF는 `assets/` 폴더에 넣고 `data.js`에 경로를 적는다.
- 브라우저 인쇄(Ctrl+P) → PDF 저장 시 인쇄 전용 레이아웃이 적용된다.

## 자격증 PDF (비밀번호 다운로드)

원본 PDF는 커밋하지 않고, 암호화한 `assets/certificates/*.pdf.enc`만 올린다.
다운로드 버튼 → 비밀번호 입력 → 브라우저에서 복호화되어 원본과 동일한 PDF가 저장된다.

```bash
# 원본 PDF 폴더(저장소 밖)를 지정해 암호화. 비밀번호는 프롬프트로 입력
node tools/encrypt-certs.mjs ~/certs
```

- 파일명 `<이름>.pdf` → `assets/certificates/<이름>.pdf.enc`, `data.js`의 `certificates[].file`에 경로 지정
- 비밀번호 변경 시 전체 파일을 같은 비밀번호로 다시 암호화

## 배포

1. GitHub에 `<아이디>.github.io` 저장소 생성
2. 이 폴더 파일을 push
3. Settings → Pages → Source: `main` / `root`
4. `https://<아이디>.github.io` 접속

# gatsby + typescript + jest(feat. test-library-react) + eslint(feat. prettier)

- gatsby
  - react기반의 SSG(static site generator) 플랫폼
- typescript
  - js 정적 유형 컴파일러
- jest
  - js 테스트 도구
- eslint
  - 코드 검사 및 컨벤션 도구

## 브라우저 지원

tsconfig.json target 속성의 esnext는 gatsby 내부의 babel 컴파일을 거치기 때문에 신경쓸 필요없다.

### gatsby의 기본적인 브라우저 지원

- IE9 이상, 1% 이상의 점유율
- [참고](https://www.gatsbyjs.com/docs/babel/)

## 참고 링크

- [Gatsby + Typescript](https://github.com/yomete/gatsby-typescript-app/blob/master/tsconfig.json)
- [ESLint + Typescript](https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project)
- [test with fetch](https://kentcdodds.com/blog/stop-mocking-fetch)
- [React+Typescript Cheatsheets](https://github.com/typescript-cheatsheets/react/blob/main/README.md)

## vscode config

```
{
  "search.exclude": {
    ".cache": true,
    "yarn.lock": true
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}

```

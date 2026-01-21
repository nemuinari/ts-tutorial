# TypeScript Tutorial

### 開発環構築

```bash
$ npm init --yes
$ npm install --save-dev typescript @types/node
$ npx tsc --init

$ mkdir src
$ touch src/index.ts

$ npx tsc // コンパイル
$ node dist/index.js // 実行

```

```t
// tsconfig.json
// "outDir": "./dist", -> "outDir": "./dist",
// コメントアウトを解除

// "compilerOptions": {},の外に下記を追加
// "include": ["./src/**/*.ts"]

```

```t
// .gitignore
./node_modules/
./dist/

```

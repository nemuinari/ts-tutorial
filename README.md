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

```lua
-- tsconfig.json
--  コメントアウトを解除
-- "outDir": "./dist",
-- "rootDir": "./src",

-- "compilerOptions" スコープの外に下記を追加
-- "include": ["./src/**/*.ts"]

-- [] から ["node"] に変更
-- "types": ["node"],

```

```lua
-- package.json
-- "type": "commonjs" => "module"

```

```t
// .gitignore
node_modules/
dist/

```

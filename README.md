# TypeScript Tutorial

### Development environment construction

```bash
$ npm init --yes
$ npm install --save-dev typescript @types/node
$ npx tsc --init

$ mkdir src
$ touch src/index.ts

$ npx tsc // compile build
$ node dist/index.js // execute

$ npx tsx src/index.js // not compiles tsx execute

```

```lua
-- tsconfig.json
-- Uncomment out.
-- "outDir": "./dist",
-- "rootDir": "./src",

-- "compilerOptions"  // Add the following outside the scope:
-- "include": ["./src/**/*.ts"]

-- [] =>  ["node"]
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

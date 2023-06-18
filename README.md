# vue3_try

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Vue の記法

<details>
<summary>@を利用したimport</summary>
<p>
import でライブラリなどを挿入させるときには相対パス、絶対パスなどで、読み込み先を指定できます
</p>
<pre>
import {利用する関数} from "ライブラリファイル"
</pre>
しかし、Vueでは <code>@</code> を利用するとそれはsrcディレクトリを示している(詳細はtsconfig.app.json)
<pre>
import {利用する関数} from "@/ライブラリファイル"
</pre>
</details>

## Vue Router の利用

`src/router/index.ts` にルーティングの設定が書かれている<br>
`src/main.ts` Vue Router が動作するように import され、use 関数で実行されている<br>

views ディレクトリは、ルーティングによって作成される画面のコンポーネントを格納するディレクトリ<br>
画面遷移によって変化する部分と変化しない部分があり、変化する部分をルーティング表示領域という<br>
SPA では変化する部分だけを javascript でレンダリングする。

App.vue でレイアウト画面を作成して、ルーティング表示領域は以下のように構成する
また、view ディレクトリ内でサブディレクトリを作成して、ユースケースごとに管理すると
views/memver/会員管理関連の画面.vue

| 番号 | 画面名           | コンポーネントファイル名 |
| ---- | ---------------- | ------------------------ |
| ①    | TOP 画面         | AppTop.vue               |
| ②    | 会員リスト画面   | member/MemberList.vue    |
| ③    | 会員詳細情報画面 | member/MemberAdd.vue     |
| ②    | 会員情報追加画面 | member/MemberDeatail.vue |

<details><summary>viewsディレクトリについて</summary>
<p>
    Vue Router を利用したプロジェクトでも、componentsディレクトリを利用できる。<br>
    viewsディレクトリはあくまで、ルーティング表示領域にレンダリングするためのコンポーネントで、<br>
    viewsディレクトリ内のコンポーネント数は、原則、画面数と一致する。<br>
    views内の画面表示用コンポーネントから、さらに子コンポーネントを利用する場合はComponentsディレクトリのファイルを利用する<br>
</p>
</details>

```sh

```

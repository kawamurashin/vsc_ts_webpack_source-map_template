

vsc_ts_webpack_source-map_template

HTML5開発用に、VScodeでTypeScriptとWebpackでソースマップ付きでゴリゴリ開発できる用。

手順

ターミナル/新しいターミナル
npm init

npm i -D webpack webpack-cli typescript ts-loader source-map-support



package.jsonを編集
"scripts": {
    "build": "webpack",
    "watch": "webpack -w"
  },

tsconfig.jsonを追加。VScodeはエラーするが気にしない。
{
    "compilerOptions": {
      "sourceMap": true,
      "target": "es5",
      "module": "es2015"
    },
    "exclude": [
        "node_modules"
    ]
}

webpack.config.jsを追加
module.exports = {
    //mode: 'production',
    mode: 'development',
    entry: './src/Main.ts',
    output: {
        path: `${__dirname}/script`,
        filename: "ts.js"
      },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader',
        },
      ],
    },
    resolve: {
      extensions: [
        '.ts', '.js',
      ],
    },
    devtool : "source-map",
    watch : true
  };

src/Main.tsを作る


index.htmlを作り、<script src="script/ts.js"></script>を入れていおく


npm run buildでエラーがないことを確認

index.htmlからopen width live server起動してURLをコピー

メニューの実行/デバックを選択

.vscode/launch.jsonができるのでURLをLiverServerのURLをペースト

新しいターミナルを開く
npm run watch

local serverを開き、再度デバックを起動。
ザクザク開発できる。

(参考)
https://ics.media/entry/16329/

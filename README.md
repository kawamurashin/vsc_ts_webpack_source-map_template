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


メニューのターミナル / ビルドタスクの実行を選択。
npm -watchを選択。
TypeScriptの問題（ウオッチモードの選択）を選ぶ。
tasks.jsonを生成。

tasksに以下を追加
	{
            "label": "StartServer",
            "type": "process",
            "command": "${input:startServer}"
        },
        {
            "label": "StopServer",
            "type": "process",
            "command": "${input:stopServer}"
        }


"inputs": [
        {
            "id": "startServer",
            "type": "command",
            "command": "extension.liveServer.goOnline"
        },
        {
            "id": "stopServer",
            "type": "command",
            "command": "extension.liveServer.goOffline"
        }
    ]


i

実行 / デバックの開始
.vscode/launch.jsonができるのでポートを5500に変更。
configurationsに以下を追加
            "preLaunchTask": "StartServer",
            "postDebugTask": "StopServer"

機能拡張からLive Serverを選択。
setting.jsonを開く。
以下を変更、追加。
   "liveServer.settings.ChromeDebuggingAttachment": true,
    "liveServer.settings.CustomBrowser": "chrome",
    "liveServer.settings.host": "localhost",
    "liveServer.settings.NoBrowser": true



メニューの実行/デバックを選択
これでザクザク開発できる。


再度起動時
上でwebpack -wを選択
これで、ザクザク開発できる。





(参考)
https://ics.media/entry/16329/


Visual Studio Code にビルドタスクやテストタスクを登録する
https://maku.blog/p/zn2er4g/

https://superuser.com/questions/1419749/how-can-i-start-live-server-and-chrome-debugger-for-vs-code-in-one-click

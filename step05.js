// expressモジュールを読み込む
const express = require('express');
// expressアプリを生成する
const app = express();
// ルート「/」にアクセスしてきたら「public」以下を静的に参照する
// 静的ファイルのルーティング
app.use(express.static('./public'));
// ファイルが見つからなかったら404エラーとする
app.use((req, res) => {
    res.sendStatus(404);
});
// ポート3000でサーバを立てる
app.listen(3000, () => {
	console.log('Listening on port 3000');
});
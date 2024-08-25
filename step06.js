// expressモジュールを読み込む
const express = require('express');
// expressアプリを生成する
const app = express();
// ルート「/」にアクセスしてきたら「public」以下を静的に参照する

// JSONデータの準備
jsondata = [
    {"id": 1, "name": "sasaki"},
    {"id": 2, "name": "kanno"},
]
// 「/」のマッピング
app.get('/', (req, res) => { 
	res.send(jsondata);
});

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
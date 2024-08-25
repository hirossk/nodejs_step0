// expressモジュールを読み込む
const express = require('express');

// データの受け取りにはbody-parserが便利
const bodyParser = require('body-parser');

// expressアプリを生成する
const app = express();

// urlencodedとjsonは別々に初期化する
app.use(bodyParser.urlencoded({
    extended: true
}));

// JSONデータの準備
jsondata = [
    {"id": 1, "name": "sasaki"},
    {"id": 2, "name": "kanno"},
]
// 「/」のマッピング
app.get('/', (req, res) => { 
	res.send(jsondata);
});
// 「/」のPOSTマッピング
app.post('/', (req, res) => { 
    // 送られてきたデータはreq.body.キー名で取り出すことができる
    newdata = {
        "id": Number(req.body.id),
        "name": req.body.name,
    }
    jsondata.push(newdata);
	res.send(jsondata);
});

// 静的ファイルのルーティング
// ルート「/」にアクセスしてきたら「public」以下を静的に参照する
app.use(express.static('./public'));
// ファイルが見つからなかったら404エラーとする
app.use((req, res) => {
    res.sendStatus(404);
});
// ポート3000でサーバを立てる
app.listen(3000, () => {
	console.log('Listening on port 3000');
});
// expressモジュールを読み込む
const express = require('express');
// expressアプリを生成する
const app = express();
// ルート「/」にアクセスしてきたら「Banana」と出力する
app.get('/', (req, res) => { 
	res.send('Get Banana');
});
app.post('/', (req, res) => { 
	res.send('Post Banana');
});
// ポート3000でサーバを立てる
app.listen(3000, () => {
	console.log('Listening on port 3000');
});

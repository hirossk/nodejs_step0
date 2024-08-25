// expressモジュールを読み込む
const express = require('express');
// method-overrideモジュールを読み込む
const methodOverride = require("method-override");
// expressアプリを生成する
const app = express();
// "_method" で指定されたクエリを HTTP リクエストとして扱います
app.use(methodOverride("_method"));
// ルート「/」にアクセスしてきたら「Banana」と出力する
app.get('/', (req, res) => { 
	res.send('Get Banana');
});
app.post('/', (req, res) => { 
	res.send('Post Banana');
});
app.put('/', (req, res) => { 
	res.send('Put Banana');
});
app.delete('/', (req, res) => { 
	res.send('Delete Banana');
});
// ポート3000でサーバを立てる
app.listen(3000, () => {
	console.log('Listening on port 3000');
});

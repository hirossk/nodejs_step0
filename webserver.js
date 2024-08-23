// https://qiita.com/koedamon/items/fb85c3eb32e7838f9d7c
// express モジュールのインスタンス作成
const express = require('express');
const app = express();

// 3000番ポートで待ちうける
app.listen(3000, () => {
  console.log('Running at Port 3000...');
});

app.use(express.json()); // JSONデータ解析のため

//JSONデータの準備
const todos = [
    { id: 1, todo: "Game" },
    { id: 2, todo: "Camp" },
    { id: 3, todo: "Study" },
  ];

//一覧の取得
app.get("/api/todos", (req, res) => {
    // todosを返す
    res.send(todos);
});

//todoの登録
app.post("/api/todos", (req, res) => {
    // 新たなToDoを宣言
    const newTodo = {
      id: todos.length + 1,
      todo: req.body.todo
    };
    // todosに新たなユーザを追加
    todos.push(newTodo);
    // todosを返す
    res.send(todos);
});

//データの更新
app.put("/api/todos/:id", (req, res) => {
    //指定されたidを持つTodoの特定、データを保持
    const todo = todos.find((t) => t.id === parseInt(req.params.id));
  
    // idが存在しなければエラーを返す
    if (!todo) return res.status(500).send("このToDoは存在しません");
    
    // 名前をリクエストに付与された値に変更
    todo.todo = req.body.todo;
    
    // todosを返す
    res.send(todos);
});

//削除 このままの削除だとデータの作成で不整合を起こします
app.delete("/api/todos/:id", (req, res) => {
    // リクエストされたidを持つユーザの特定
    const todo = todos.find((t) => t.id === parseInt(req.params.id));
  
    // idが存在しなければエラーを返す
    if (!todo) return res.status(500).send("このToDoは存在しません");
    
    // 特定したToDoがtodos配列のどこにいるか調べ
    // そのindexを保持
    const index = todos.indexOf(todo);
    
    // spliceを使いindexをもとにToDoの削除
    todos.splice(index, 1);
  
    // todosを返す
    res.send(todos);
});

// 静的ファイルのルーティング
app.use(express.static('./public'));

// その他のリクエストに対する404エラー
app.use((req, res) => {
  res.sendStatus(404);
});

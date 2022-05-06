// express準備
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }))

/* ----- 基本 ----- */
app.get("/", (req, res) => {
  res.send("こんにちは")
})

/* ----- createディレクトリにアクセスがあったらhtml読み込む ----- */
app.get("/blog/create", (req, res) => {
  res.sendFile(__dirname + "/views/blogCreate.html")
})

/* ----- createディレクトリにアクセスがあったらログ ----- */
app.post("/blog/create", (req, res) => {
  console.log("reqの中身：" , req.body);
  res.send("ブログデータをデータを投稿しました。")
})

/* ----- localhost5000接続 ----- */
app.listen(5000, () => {
  console.log("Listening on localhost port 5000");
})

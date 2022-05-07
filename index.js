// express準備
const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.urlencoded({ extended: true }))

mongoose.connect("mongodb+srv://kingkazuma7:QWEasd123@cluster0.jjuvo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")


  // MongoDBへ接続
  .then(() => {
    console.log("Success: Conected to MongoDB");
  })
  .catch((error) => {
    console.error("Failure: Unconnected to MongoDB");
  })

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

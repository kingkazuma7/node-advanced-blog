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


/* ----- スキーマ ... DBの形&種類 ----- */
const Schema = mongoose.Schema

/* ----- DBのデータの各項目 ----- */
const BlogSchema = new Schema({
  title: String,
  summary: String,
  image: String,
  textBody: String,
})

/* ----- Model ----- */
const BlogModel = mongoose.model("Blog", BlogSchema)

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
  //BlogModelのなかcrudが内蔵（ここでは書き込み）
  BlogModel.create(req.body, (error, savedBlogData) => {
    if (error) {
      console.log("データの書き込みが失敗しました。");
      res.send("ブログデータの投稿が失敗しました。")
    } else {
      console.log("データの書き込みが成功しました。");
      res.send("ブログデータの投稿が成功しました。")
    }
  })
})

/* ----- localhost5000接続 ----- */
app.listen(5000, () => {
  console.log("Listening on localhost port 5000");
})

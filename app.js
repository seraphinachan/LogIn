// express
var express = require("express");
var app = express();

// ejs
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

// bootstrap
app.use("/js", express.static(__dirname + "/node_modules/bootstrap/dist/js"));
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));

// post
app.use(express.urlencoded({ extended: true }));

// router
var indexRouter = require("./router/");
var boardRouter = require("./router/board");

app.use("/", indexRouter);
app.use("/", boardRouter);

//jquery
app.use("/js", express.static(__dirname + "/node_modules/jquery/dist")); // jquery JS

app.listen(3000, function () {
  console.log("3000 포트로 노드 서버 오픈!");
});

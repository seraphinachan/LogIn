var express = require("express");
var router = express.Router();
var db = require("../lib/db");

router.use(
  express.urlencoded({
    extended: true,
  })
);

router.get("/board/register", function (req, res) {
  res.render("board/register");
});

router.post("/board/register", function (req, res) {
  var userName = req.body.userName;
  var userEmail = req.body.userEmail;
  var userPassword = req.body.userPassword;
  var data = [userName, userEmail, userPassword];
  var sql = "insert into member(idx, userName, userEmail, userPassword, date, del_yn) values(null,?,?,?,now(), 'N')";
  db.query(sql, data);
  res.redirect("/board");
});

module.exports = router;

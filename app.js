const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("./router.js");
const { get } = require("mongoose");

app.set('view engine','ejs');

// ログイン画面でフォームを利用するため
app.use(bodyParser.urlencoded({extended:true}));

app.use("/",require("./router.js"));

app.listen(3000);
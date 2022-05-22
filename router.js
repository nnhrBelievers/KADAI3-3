const router = require("express").Router();
const passport = require("passport"); 
const LocalStrategy = require("passport-local").Strategy;

passport.use("mylogin",
  new LocalStrategy({
    usernameField: "username",
    passwordField: "password",
  },(username,password,done) => {

    if(username==="user" && password==="password"){
      return done(null,username);
    }

    return done(null,false);
  })
);




router.use(passport.initialize());

router.get("/login",(req,res) => {

  res.render("./login.ejs");
});


// ログインに成功したら"/ok"へ、失敗したら"/login"にリダイレクトする
router.post("/login",passport.authenticate(
  "mylogin",
  {
    successRedirect: "/ok",
    failureRedirect: "/login",
    session: false // セッションにログイン情報を保存しない。trueとすると、passport.serializeUserやpassport.deserializeUserというメソッドを実装する事でセッションに保存したログイン情報が正しいか判別出来る。
  }
));

router.get("/ok",(req,res) => {
  res.render("./ok.ejs");
});


module.exports = router;
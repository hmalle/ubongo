
const db = require("../models");
const passport = require("../config/passport");
const path = require("path");

module.exports = (app) => {
  app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname+"./client/build/index.html"));
  });

  app.post("/api/signin", passport.authenticate("local"), (req,res)=>{
    res.json({
      "username": req.user.username,
      "email"   : req.user.email,
    });
  });

  app.post("/api/signup", (req,res)=>{
    db.User.create({
      email   : req.body.email,
      username: req.body.username,
      password: req.body.password,
    }).then((resp)=>{
      //If the user is saved in the db, return the username and email
      if(resp.username === req.body.username){
        res.json({
          "username": resp.username,
          "email"   : resp.email,
        });
      }else{
        res.json({
          "username": null,
          "email"   : null,
        });
      }
    }).catch((err)=>{
      console.log(">>> error"+ err);
      res.json(err);
    });
  });
};


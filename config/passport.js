
const bcrypt = require("bcrypt-nodejs");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../models");

passport.use(
  new LocalStrategy({
    usernameField: "username",
    passwordField: "password",
  }, 
  (username, password, done)=>{
    console.log(">>> Authenticating");
    db.User.findOne({
      where: { username: username }
    }).then( user => {
      if( !user || !bcrypt.compareSync(password, user.password)){
        return done(
          null, 
          {
            "username": null,
            "email"   : null,
          },
        );
      }
      return done(null, user);
    });
  }
));

passport.serializeUser( (user,done)=>{
  done(null, user);
});

passport.deserializeUser( (user,done)=>{
  done(null, user);
});

module.exports = passport;

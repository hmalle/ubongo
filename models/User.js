
const bcrypt = require("bcrypt-nodejs");

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("User",{
    email:{
      type    : Sequelize.STRING(64),
      required: true,
      unique  : true,
    },
    username:{
      type      : Sequelize.STRING(64),
      primaryKey: true,
      unique    : true,
    },
    password:{ 
      type    : Sequelize.STRING(128),
      required: true,
    },
  });

  User.hook("beforeCreate", (user)=>{
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });

  /*
  //This prototype doesnt grab this.password
  User.prototype.validPassword = (password)=>{
    return bcrypt.compareSync(password, this.password);
  };
  */

  return User;
};

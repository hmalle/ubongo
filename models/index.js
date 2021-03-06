
const fs        = require('fs');
const path      = require('path');
const Sequelize = require('sequelize');
const env       = process.env.NODE_ENV || 'development';
const config    = require(__dirname + '/../config/config.json')[env];
const db        = {};

var sequelize = 0;
if(config.use_env_variable){
  sequelize = new Sequelize(process.env[config.use_env_variable]);
}else{
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs.readdirSync(__dirname).filter(function(file) {
  return (file.indexOf('.') !== 0) && (file !== "index.js");
}).forEach(function(file) {
  const model = sequelize.import(path.join(__dirname,file));
  console.log(">>> Imported "+ model.name +".js");
  db[model.name] = model;
});

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;


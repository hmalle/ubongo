
module.exports = (sequelize, Sequelize) => {
  const Words = sequelize.define("Word",{
    id:{
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    paragraph :{
      type      : Sequelize.STRING(500),
      required  : true,
    },
  });

  return Words;
};

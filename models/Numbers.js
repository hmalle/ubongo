
module.exports = (sequelize, Sequelize) => {
  const Numbers = sequelize.define("Number",{
    id:{
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    paragraph :{
      type      : Sequelize.STRING(300),
      required  : true,
    },
  });

  return Numbers;
};

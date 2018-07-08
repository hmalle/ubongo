
module.exports = (sequelize, Sequelize) => {
  const Cards = sequelize.define("Card",{
    id:{
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    deck :{
      type      : Sequelize.STRING(100),
      required  : true,
    },
  });

  return Cards;
};

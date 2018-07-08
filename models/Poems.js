
module.exports = (sequelize, Sequelize) => {
  const Poems = sequelize.define("Poem",{
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

  return Poems;
};

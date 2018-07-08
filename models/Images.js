
module.exports = (sequelize, Sequelize) => {
  const Images = sequelize.define("Image",{
    id:{
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    filePath:{
      type      : Sequelize.STRING(100),
      required  : true,
    },
  });

  return Images
};

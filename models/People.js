
module.exports = (sequelize, Sequelize) => {
  const Persons = sequelize.define("Person",{
    id:{
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name :{
      type      : Sequelize.STRING(50),
      required  : true,
    },
    imageSrc:{
      type  : Sequelize.STRING(50),
      required: true,
    },
  });

  return Persons;
};

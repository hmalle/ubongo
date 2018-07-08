
//TODO: This way of implementing memory, will have a tendency of increasing infinitely. 
//There needs to be a way of limiting so each user cna have at most a certain number of sessions

module.exports = (sequelize, Sequelize) => {
  const Session = sequelize.define("Session",{
    id:{
      type         : Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey   : true,
    },
    username:{
      type    : Sequelize.STRING(64),
      required: true,
    },
    //This is for either cards,images,numbers,people, poems, or words;
    field:{
      type   : Sequelize.STRING(10),
      require: true,
    },
    data:{
      type    : Sequelize.STRING(1100),
      required: true,
    },
  });

  return Session;
};

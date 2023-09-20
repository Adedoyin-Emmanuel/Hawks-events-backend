const { DataTypes } = require("sequelize");
const Sequelize = require('../../db/database')

let user = Sequelize.define("hng-hawks", {
  Uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
    },
  
    avatar: { 
      type: DataTypes.BLOB(),
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
  
    access_token:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
  }, 
  
  refresh_token:{
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }

});

Sequelize.sync()
  .then(() => {
    console.log("User table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

  
module.exports = user;

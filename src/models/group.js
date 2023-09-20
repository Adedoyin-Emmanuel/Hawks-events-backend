const { DataTypes } = require("sequelize");
const Sequelize = require('../../db/database')

let Group = Sequelize.define("Group", {
   id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
   },
   title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
         notEmpty: true,
      },
   }
});

Sequelize.sync()
  .then(() => {
    console.log("Group table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });
  
module.exports = Group;

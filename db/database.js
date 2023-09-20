const sequelize = require("sequelize");
const {
  MYSQL_SERVER, 
  MYSQL_DIALECT,
  MYSQL_DB,
  MYSQL_USER,
  MYSQL_PASSWORD
  
} = require("../src/config/constants")
 console.log(
  MYSQL_SERVER, 
  MYSQL_DIALECT,
  MYSQL_DB,
  MYSQL_USER,
  MYSQL_PASSWORD
 )

const Sequelize = new sequelize(
  MYSQL_DB, 
  MYSQL_USER, 
  MYSQL_PASSWORD, {
    host: MYSQL_SERVER,
    dialect: MYSQL_DIALECT,
  });



Sequelize.authenticate()
    .then(() => {
      console.log("Connection has been established successfully.");
    })
    .catch((error) => {
      console.error("Unable to connect to the database: ", error);
});

module.exports = Sequelize
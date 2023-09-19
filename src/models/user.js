const sequelize = require("sequelize");
const { DataTypes } = require("sequelize");

const Sequelize = new sequelize("hng", "gerard", "password", {
  host: "54.221.51.134",
  dialect: "mysql",
});

Sequelize.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

let user = Sequelize.define("hng-hawks", {
  Uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

Sequelize.sync()
  .then(() => {
    console.log("User table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

module.exports = user;

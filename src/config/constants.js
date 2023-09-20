const dotenv = require("dotenv");
const path = require('path')
dotenv.config({path:path.resolve(__dirname, "../../config.env")});

const constants = {
  MYSQL_USER: process.env.MYSQL_USER,
  MYSQL_SERVER: process.env.MYSQL_SERVER,
  MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
  MYSQL_DIALECT:process.env.MYSQL_DIALECT,
  MYSQL_DB: process.env.MYSQL_DB,
  APP_NAME: "EVENTS PLANNING APP",
  PORT: process.env.PORT || 5000,
  BASE_URL: `http://localhost/api/v1/${this.PORT}`,

  CLOUDINARY: {
    NAME: process.env.CLOUDINARY_NAME,
    API_KEY: process.env.CLOUDINARY_API_KEY,
    SECRET_KEY: process.env.CLOUDINARY_SECRET_KEY,
  },


  UPLOAD_PATH: {
    EVENT_IMAGES: "EVENT_IMAGES",
  },

  DB_COLLECTION: {
    USER: "USER",
    EVENT: "EVENT",
    GROUP: "GROUP",
  },

  

  MESSAGES: {
    USER:{
      USER_EXIST: "User already exists",
      USER_CREATED: "User created successfully",
      USER_LOGGED: "User logged in successfully",
      USER_LOGGED_OUT: "User logged out in successfully",
      USER_UPDATED: "User updated successfully",
      USER_NOT_EXIST: "User does not exist"
    },
    
    CLOUDINARY:{
      UPLOADED: "Upload Successful",
    },

    
    ALREADY_EXIST: "Resource already exists",
    ALREADY_VERIFIED: "User has already been verified",
    CREATED: "Resource created successfully",
    UPDATED: "Resource updated successfully",
    DELETED: "Resource deleted successfully",
    NOT_FOUND: "Not found",
    MISSING_FIELDS: "Please fill in the missing fields",
    INVALID_CREDENTIALS: "Invalid credentials",
    EVENT_CREATED: "New Event created successfully",
  },
};

module.exports = constants;

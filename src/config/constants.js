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
    USER_EXIST: "User already exists",
    USER_CREATED: "User created successfully",
    USER_LOGGED: "User logged in successfully",
    USER_LOGGED_OUT: "User logged out in successfully",
    USER_UPDATED: "User updated successfully",
    USER_NOT_EXIST: "User does not exist",
    USER_ACTIVITY_GOTTEN: "User activities gotten successfully",
    EVENT_CREATED: "New Event created successfully",
    UPLOADED: "Upload Successful",
    CONFIRM_EMAIL: "Please confirm email",
    EMAIL_CONFIRMED: "Your email have been confirmed",
    ALREADY_EXIST: "Resource already exists",
    ALREADY_VERIFIED: "User has already been verified",
    CREATED: "Resource created successfully",
    FETCHED: "Resource fetched",
    UPDATED: "Resource updated successfully",
    DELETED: "Resource deleted successfully",
    NOT_FOUND: "Not found",
    MISSING_FIELDS: "Please fill in the missing fields",
    INVALID_CREDENTIALS: "Invalid credentials",
    INVALID_TOKEN: "Invalid token",
    INVALID_PASSWORD: "Invalid password",
    TOKEN_VERIFIED: "Token verified successfully",
    OTP_MESSAGE: "Hello, your BBWE verification code is",
    OTP_SENT: "OTP Sent",
    PASSWORD_MISMATCH: "Password mismatch detected",
    PASSWORD_RESET_EMAIL_SENT:
      "The reset password link has been sent to your email address",
    PASSWORD_RESET_SUCCESS: "Password reset successful",
  },
};

module.exports = constants;

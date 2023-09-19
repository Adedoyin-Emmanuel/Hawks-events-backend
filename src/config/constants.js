const dotenv = require("dotenv");
dotenv.config();

const constants = {
  MYSQL_USER: "gerard",
  MYSQL_SERVER: "54.221.51.134",
  MYSQL_PASSWORD: "password",
  MYSQL_DB: "hng",
  APP_NAME: "EVENTS PLANNING APP",
  PORT: process.env.PORT || 5000,
  DATABASE_URI: process.env.DATABASE_URI,
  MYSQL_URL: process.env.DATABASE_URL,
  JWT_PUBLIC_KEY: process.env.JWT_PUBLIC_KEY,
  JWT_USER_LOGIN_EXPIRATION: "24h",
  EMAIL_USER: process.env.EMAIL_USER,
  EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
  BASE_URL: `http://localhost/api/v1/${PORT}`,

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

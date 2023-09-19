const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { JWT_PUBLIC_KEY } = require('../config/constants');

const hashPassword = async (password) => {

};

const comparePassword = async (password, hashedPassword) => {

};

const createJwt = async (payload, expTime, secretKey = JWT_PUBLIC_KEY) => {

};

const decryptData = async (token, secretKey = JWT_PUBLIC_KEY) => {

};

module.exports = {
  hashPassword, comparePassword, createJwt, decryptData,
};

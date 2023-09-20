const userModel = require('../models/user')
const BadRequestError = require('../middlewares/errors')

const alloha = async (req,res) => {
    // throw new BadRequestError("This User's Email is  not verified");
    res.status(200).json({message:"It's still day one!"})
}

const register = async (req,res) => {
    try {
        
    } catch (error) {
        
    }
}


const login = async (req,res) => {
    try {
        
    } catch (error) {
        
    }
}


const profile = async (req,res) => {
    try {
        
    } catch (error) {
        
    }
}

const updateProfile = async (req,res) => {
    try {
        
    } catch (error) {
        
    }
}


module.exports = {
    alloha,
    register,
    login, 
    profile, 
    updateProfile
}
const authRoutes = require('express').Router();
const authController = require('../Controllers/authController');

authRoutes.post('/sign-up', authController.signup)
authRoutes.post('/sign-in', authController.signin)

module.exports= authRoutes
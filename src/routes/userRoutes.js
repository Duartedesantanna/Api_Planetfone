const express = require('express');
const userController = require('../controllers/userController')();

function userRoutes(){
    this.router = express.Router();
    this.router.get('/getUser', userController.getUser)
    
    return this.router;
}

module.exports = userRoutes;
const express = require('express');
const testApiController = require('../controllers/testApiController')();

function testApiRoutes(){
    this.router = express.Router();
    this.router.get('/', testApiController.testService)
    
    return this.router;
}

module.exports = testApiRoutes;
const testApiService = require('../services/testApiService')();
function testApiController(){

    async function testService(req, res, next){
        var ret = await testApiService.testService();
        
        if(ret.status){
            req._operation = "SELECT";
            req._statusCode = 200;
            req._result = ret.result;
            res.json(ret.result);
        }else{
            req._operation = "ERROR";
            req._result = undefined;
            req._statusCode = 400;
            req._message = ret.result;
        }
        next();
    }

    return {
        testService
    }
}

module.exports = testApiController;
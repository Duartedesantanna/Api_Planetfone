const userService = require('../services/userService')();
function userController(){

    async function getUser(req, res, next){
        var ret = await userService.getUser();
        
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
        getUser
    }
}

module.exports = userController;
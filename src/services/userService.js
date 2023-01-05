const userRepository = require('../repositories/userRepository')();
function userService(){

    async function getUser(){
        return await userRepository.getUser();
    }

    return {
        getUser
    }
}
module.exports = userService;
const axios = require('axios');

function testApiRepository(){

    async function testService(){
        try {
            return{
                status: true,
                result: "Servidor Rodando!"
            }
        } catch (error) {
            return{
                status: false,
                result: "InternalServerError#" + err.message
            }
        }
    }

    return {
        testService
    }
}
module.exports = testApiRepository;
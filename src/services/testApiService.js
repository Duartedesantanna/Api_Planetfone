const testApiRepository = require('../repositories/testApiRepository')();
function testApiService(){

    async function testService(){
        return await testApiRepository.testService();
    }

    return {
        testService
    }
}
module.exports = testApiService;
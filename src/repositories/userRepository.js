const axios = require('axios');

function userRepository(){

    async function getUser(){
        try {
            const result = await axios('https://jsonplaceholder.typicode.com/users');
            const arrayResult = [];
            for(let i = 0; i<5; i++){
                const user = {
                    id: result.data[i].id,
                    name: result.data[i].name,
                    username: result.data[i].username,
                    email: result.data[i].email,
                }
                arrayResult.push(user);
            }
            var test = (await this.sortArray(arrayResult)).result;
            return{
                status: true,
                result: test
            }
        } catch (error) {
            return{
                status: false,
                result: "InternalServerError#" + error.message
            }
        }
    }
    async function sortArray(list){
        try {
            list.sort((a, b) => {
                if (a.name < b.name) {
                    return -1;
                  }
                  if (a.name > b.name) {
                    return 1;
                  }
                  return 0;
            })
            return{
                status: true,
                result: list
            }
        } catch (error) {
            
            return{
                status: false,
                result: "InternalServerError#" + err.message
            }
        }
    }

    return {
        getUser,
        sortArray
    }
}
module.exports = userRepository;
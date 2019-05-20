const jokesService = require("../../persistency/services/jokes");

function getJokes(db){
  const result = jokesService.getJokes(db);
   if(result && (result  instanceof Array )){
     return result;
   }
}

module.exports={
  getJokes
}
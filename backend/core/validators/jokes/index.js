
function  isGetJokesRequestBodyValid(body){

  if(body && body.pageNumber && body.pageSize){
    if(Number.isInteger(body.pageNumber)  && Number.isInteger(body.pageSize)){
      return true;
    }
  }
}

module.export ={
  isGetJokesRequestBodyValid
}
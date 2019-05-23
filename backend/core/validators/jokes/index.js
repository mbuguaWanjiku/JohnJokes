function isGetJokesRequestBodyValid(body) {
  if (body && body.pageNumber && body.pageSize) {
    if (Number.isInteger(body.pageNumber) && Number.isInteger(body.pageSize)) {
      return true;
    }
  }
}

function isDeleteJokeRequestBodyValid(request) {
  return request && request.body && request.body.joke && request.body.joke.id;
}
function isPostJokeRequestBodyValid(request) {
  console.log(request.body)
  return (request && request.body  && request.body.data && 
    request.body.data.joke && request.body.data.joke.punchline);
}
function isUpdateJokeRequestBodyValid(request) {
  console.log(request.body)
  return (request && request.body  && request.body.data && 
    request.body.data.joke && request.body.data.joke.punchline,request.body.data.joke.id);
}

module.exports = {
  isGetJokesRequestBodyValid,
  isPostJokeRequestBodyValid,
  isDeleteJokeRequestBodyValid,
  isUpdateJokeRequestBodyValid
};

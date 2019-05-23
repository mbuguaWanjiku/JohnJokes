const jokesService = require("../../persistency/services/jokes");

function getJokes() {
  const result = jokesService.getJokes();
  if (result && result instanceof Array) {
    return result;
  }
}

function deleteJoke(joke) {
  return jokesService.deleteJoke(joke);
  
}
function insertJoke(joke) {
  return jokesService.insertJoke(joke);
}
function updateJoke(joke) {
  return jokesService.updateJoke(joke);
  
}

module.exports = {
  getJokes,
  deleteJoke,
  insertJoke,
  updateJoke
};

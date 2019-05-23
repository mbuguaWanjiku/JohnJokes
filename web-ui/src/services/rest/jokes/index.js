const request = require("../request");

function getAll() {
  return request
    .getAll()
    .then(function(response) {
      return response.data.result;
    })
    .catch(function(error) {
      console.log(error);
    });
}

function deleteJoke(joke) {
  return request
    .deleteJoke(joke)
    .then(function(response) {
      return response.data.result;
    })
    .catch(function(error) {
      console.log(error);
    });
}
function postJoke(joke) {
  return request
    .postJoke(joke)
    .then(function(response) {
      return response.data.result;
    })
    .catch(function(error) {
      console.log(error);
    });
}
function putJoke(joke) {
  return request
    .putJoke(joke)
    .then(function(response) {
      return response.data.result;
    })
    .catch(function(error) {
      console.log(error);
    });
}

module.exports = {
  getAll,
  deleteJoke,
  putJoke,
  postJoke
};

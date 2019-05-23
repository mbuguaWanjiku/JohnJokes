const axios = require("axios");

//import {readFileSync} from 'fs'

//const configJson = readFileSync("../../../config.json");
//const config = JSON.parse(configJson);

const config = {
  "api": {
    "basePath": "http://localhost",
    "port": 3050,
    "version": "v1"
  }
}


const apiFullPath =
  config.api.basePath +
  ":" +
  config.api.port +
  "/" +
  "apis/" +
  config.api.version;

function getAll() {
  return axios.get(apiFullPath + "/jokes/");
}
function deleteJoke(deleteJoke) {
  return axios.delete(apiFullPath + "/joke/delete", { data: { joke: deleteJoke } });
}

function postJoke(joke) {
  return axios.post(apiFullPath + "/joke/post", { data: { joke: joke } });
}
function putJoke(joke) {
  return axios.put(apiFullPath + "/joke/put", { data: { joke: joke } });
}


export {
  getAll,
  deleteJoke,
  putJoke,
  postJoke
};

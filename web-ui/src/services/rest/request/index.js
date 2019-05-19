const axios = require("axios");
const fs = require("fs");
const config = JSON.parse(fs.readFileSync("../../../config.json"));

const apiFullPath =
  config.api.basePath +
  ":" +
  config.api.port +
  "/" +
  "apis/" +
  config.api.version;

function getAll(pageNumber, pageSize) {
  return axios.get(apiFullPath + "/jokes", {
    params: {
      pageNumber: pageNumber,
      pageSize: pageSize
    }
  });
}

module.exports = {
  getAll
};

const request = require("../request");

function getAll() {
return  request.getAll(1,10)
    .then(function(response) {
      console.log(response.data.results);
    })
    .catch(function(error) {
      console.log(error);
    });
}

getAll();

const express = require("express");
var router = express.Router();
const jokes = require("../../../core/jokes");

//const isGetJokesRequestBodyValid = require('../../../core/validators/jokes')

router.get("/apis/v1/jokes/", (req, res) => {
  const result = jokes.getJokes();
  res.send({ result: result });
});
module.exports = router;

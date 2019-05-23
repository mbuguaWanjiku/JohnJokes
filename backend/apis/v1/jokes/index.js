const express = require("express");
var router = express.Router();
const jokes = require("../../../core/jokes");
const validators = require("../../../core/validators/jokes");

router.get("/up", (req, res) => {
  const result = "running";
  res.send({ result: result });
});

router.get("/apis/v1/jokes/", (req, res) => {
  const result = jokes.getJokes();
  res.send({ result: result });
});

router.delete("/apis/v1/joke/delete", (req, res, next) => {
  if (validators.isDeleteJokeRequestBodyValid(req)) {
    const result = jokes.deleteJoke(req.body.joke);

    res.send({ result: result });
  } else {
    res.status(400);
    res.send({ error: "unexpected body" });
  }
});

router.post("/apis/v1/joke/post", (req, res, next) => {
  if (validators.isPostJokeRequestBodyValid(req)) {
    const result = jokes.insertJoke(req.body.data.joke);
    res.send({ result: result });
  } else {
    res.status(400);
    res.send({ error: "unexpected body" });
  }
});
router.put("/apis/v1/joke/put", (req, res, next) => {
  if (validators.isUpdateJokeRequestBodyValid(req)) {
    const result = jokes.updateJoke(req.body.data.joke);
    res.send({ result: result });
  } else {
    res.status(400);
    res.send({ error: "unexpected body" });
  }
});

module.exports = router;

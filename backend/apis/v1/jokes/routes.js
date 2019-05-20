const express = require('express');
var router = express.Router();
const isGetJokesRequestBodyValid = require('../../../core/validators/jokes')


router.get("/", (req, res,next) => {
 if(!isGetJokesRequestBodyValid(req.body)){
    cosnsole.log("Unsupported  params")
    res.send('Hello from B!')
 }
 res.send('Hello from B!')
});
module.exports = router;
const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
const cors = require('cors')
//const jokesService = require("./persistency/services/jokes");
const jokes = require("./core/jokes/");
const dbSetup = require("./persistency/db.instance").DB.getInstance();
//const db = dbSetup.init();
const jokesRouter = require('./apis/v1/jokes')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//var jokes = require('./apis');

//both index.js and things.js should be in same directory
//app.use('/apis/v1.0/jokes', jokes);

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

// router.get("/apis/v1/jokes/", function(req, res) {
//   const result = jokes.getJokes(db);
//   res.send({
//     result:result
//   });
// });

// router.get("/", function(req, res) {
//   const result = jokesService.getJokes(db);
//   res.send(result);
// });
// jokes.getJokes(db);
// console.log(jokes.getJokes(db));


app.use("/", jokesRouter);
app.use(cors())

app.listen(3050, function() {
  console.log("listening on 3050");
});

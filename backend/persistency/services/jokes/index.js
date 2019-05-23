
const DB = require('../../db.instance').DB;
const uuid = require('uuid/v1');

function getJokes() {
  const res = DB.getInstance().exec("SELECT * FROM tbl_jokes");
  return res;
}
function deleteJoke(joke) {
  const id = joke.id;
  const res = DB.getInstance().exec("DELETE FROM tbl_jokes WHERE id = :id", {id});
  return res;
}

function insertJoke(joke) {
  const types = ["punch", "triple", "smile", "act", "callback"];
  const type = types[Math.floor(Math.random() * 4)];
  const id = uuid();
  const res = DB.getInstance().exec("INSERT INTO tbl_jokes (id, punchline, tag) VALUES (:id, :punchline, :tag)",{id:id, punchline: joke.punchline, type:type});
  console.log(res)
  console.log("sssss")
  return res;
}
function updateJoke(joke) {
  const res = DB.getInstance().exec("UPDATE tbl_jokes SET punchline = :punchline WHERE id = :id",{id:joke.id, punchline: joke.punchline});
  console.log(res)
  console.log("sssss")
  return res;
}


module.exports={
  getJokes,
  deleteJoke,
  insertJoke,
  updateJoke
}
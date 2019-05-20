
const DB = require('../../db.instance').DB;

function getJokes(db) {
  const res = DB.getInstance().exec("SELECT * FROM tbl_jokes");
  console.log(res)
  return res;
}

module.exports={
  getJokes
}
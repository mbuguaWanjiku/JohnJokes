const alasql = require("alasql");

const init = () => {
  const db = new alasql.Database();

  const types = ["punch", "triple", "smile", "act", "callback"];

  db.exec(
    "CREATE TABLE tbl_jokes (" +
      "id VARCHAR(36) NOT NULL DEFAULT UUID(), " +
      "punchline VARCHAR(200) NOT NULL, " +
      "type VARCHAR(30), " +
      "created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, " +
      "modified_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP)"
  );

  alasql
    .promise('SELECT * FROM CSV("jokes.csv", {headers:false})')
    .then(data => {
      data.map(item => {
        let type = types[Math.floor(Math.random() * 4)];
        let insertStatement =
          "INSERT INTO tbl_jokes (punchline, type) VALUES (:punchline, :type);";
        db.exec(insertStatement, { punchline: item[0], type: type });
      });
      console.log("Database seeded");
      /*let res = db.exec("SELECT * FROM tbl_jokes");
      console.log("Error:", res);*/
    })
    .catch(err => {
      console.log("Error:", err);
    });

  return db;
};

module.exports = {
  init
};

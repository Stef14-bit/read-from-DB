const database = require("./database");

const getUsers = (req, res) => {
  database
    .query("select * from users")
    .then(([users]) => {
      res.json(users);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("error connecting to database");
    });
};

const getUserId = (req, res) => {
  database.query("select * from users where id =?", [id]).then(([user]) => {
    if (user[0] !== null) {
      res.json(user[0]);
    } else {
      res.status(404).send("user not found");
    }
  });
};

module.exports = { getUsers, getUserId };

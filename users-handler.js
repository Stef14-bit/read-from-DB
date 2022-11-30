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
  const id = parseInt(req.params.id);

  database
    .query("select * from users where id =?", [id])
    .then(([users]) => {
      if (users[0] != null) {
        res.json(users[0]);
      } else {
        res.status(404).send("user not found");
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("error connecting to database");
    });
};

module.exports = { getUsers, getUserId };

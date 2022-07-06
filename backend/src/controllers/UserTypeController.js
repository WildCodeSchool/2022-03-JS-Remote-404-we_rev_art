const models = require("../models");

class UserTypeController {
  static browse = (req, res) => {
    models.typeaccount
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = UserTypeController;

const argon2 = require("argon2");
const { v4: uuidv4 } = require("uuid");
const models = require("../models");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const hashPassword = (plainPassword) => {
  return argon2.hash(plainPassword, hashingOptions);
};

// const verifyPassword = (password, hashedPassword) => {
//   return argon2.verify(hashedPassword, password);
// };

class UserController {
  static signin = async (req, res) => {
    // const user = req.body;

    // TODO hashpassword
    try {
      const hash = await hashPassword(req.body.password);
      // TODO uuid
      const id = uuidv4();
      await models.user.insert(id, hash, req.body.email);
      // await models.profil.insert(id, req.body.typeaccount_id);
      res.send("nickel");
    } catch (err) {
      res.status(400).send("error server");
    }
  };

  // static login = async (req, res) => {
  // TODO validate data => midlleware
  // TODO get hashpassword via email
  // TODO comparer le hashpassword avec password
  // TODO get profil a partire du uuid
  // TODO generate token cookie via JWT
  // };
}

module.exports = UserController;

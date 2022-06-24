const argon2 = require("argon2");
const { v4: uuidv4 } = require("uuid");
const models = require("../models");
/* const jwt = require('jsonwebtoken'); */

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
    /* const user = req.body; */

    // TODO hashpassword
    try {
      const hash = await hashPassword(req.body.password);
      // TODO uuid
      const id = uuidv4();
      await models.user.insert(id, hash, req.body.email);
      /* await models.profil.insert(id, req.body.typeaccount_id); */
      res.send("nickel");
    } catch (err) {
      res.status(400).send("error server");
    }
  };

  /* static login = async (req, res) => { */
  // ==>TODO VALIDATE DATA => MIDDLEWARE
  // ==>TODO (GET HASHPASSWORD VIA EMAIL)
  // ==>TODO (COMPARE LE HASHEDPASSWORD WITH USER PASSWORD)=>(ligne 17 à 19?)
  // ==>TODO GET PROFIL A PARTIR DU UUID(comparaison aussi en front Terry?)
  // ==>TODO GENERATE TOKEN COOKIE VIA via JWT
  /* static token = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      throw 'Invalid user ID';
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};
    // }; */
}

module.exports = UserController /* checkEMail; checkAuth */;

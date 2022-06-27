const argon2 = require("argon2");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");
/* const bodyParser = require("body-parser"); */
const models = require("../models");
const { verifyPassword } = require("../middleware/Auth");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const hashPassword = (plainPassword) => {
  return argon2.hash(plainPassword, hashingOptions);
};

class UserController {
  static signin = async (req, res) => {
    // TODO hashpassword
    try {
      const hash = await hashPassword(req.body.password);
      // TODO uuid
      const id = uuidv4();
      await models.user.insert(id, hash, req.body.email);
      await models.profil.insert(req.body, id);
      res.send("nickel");
    } catch (err) {
      res.status(400).send("error server");
    }
  };

  static login = async (req, res) => {
    verifyPassword(req.body.email, req.user.password)
      .then(() => {
        const token = jwt.sign(
          { email: req.body.email },
          process.env.PRIVATETOKEN
        );
        res
          .status(201)
          .cookie("user_token", token, {
            httpOnly: true,
            expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
          })
          .json({ email: req.body.email, token });
      })
      .catch((error) => {
        /* console.log(error); */
        res.send(error);
      });
  };
  // TODO validate data => midlleware => voir middleware auth
  // TODO get hashpassword via email

  // TODO comparer le hashpassword avec password
  /* 
    verifyPassword(req.body.password, req.user.hashedpassword)
      .then(response => {
        const token = jwt.sign({ email: req.body.email }, process.env.PRIVATETOKEN)
        res
          .status(201)
          .cookie('user_token', token, { httpOnly: true, expires: new Date(Date.now() + (1000 * 60 * 60 * 24)) })
          .json({ email: req.body.email, token })
      })
      .catch(error => {
        console.log(error)
        res.send(error)
      })
  }) */
  // TODO get profil a partire du uuid
  /* static token = (req, res, next) => {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
      const userId = decodedToken.userId;
      if (req.body.userId && req.body.userId !== userId) {
        throw "Invalid user ID";
      } else {
        next();
      }
    } catch {
      res.status(401).json({
        error: new Error("Invalid request!"),
      });
    }
  };
  // }; */
}

module.exports = UserController;

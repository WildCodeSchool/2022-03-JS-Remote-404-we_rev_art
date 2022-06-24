/* const jwt = require("jsonwebtoken");
require("dotenv").config();
const user = require("../models/UserManager");

const checkedForEmail = (req, res, next) => {
  user.findOne(req.body.email)
    .then((result) => {
      if (result[0]) {
        req.user = result[0];
        next();
      } else {
        res.status(401).send("wrong credentials, try again");
      }
    })
    .catch((err) => console.log(err));
};

const checkAuth = (req, res, next) => {
  if (req.cookies) {
    jwt.verify(
      req.cookies.user_token,
      process.env.PRIVATETOKEN,
      (err, decode) => {
        if (err) {
          console.log(err);
          res.status(401).send("You don t have the correct rights");
        } else next();
      }
    );
  } else {
    res.status(401).send("You don t have the correct rights");
  }
};

module.exports = { checkedForEmail, checkAuth }; */

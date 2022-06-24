const express = require("express");

const { UserController } = require("./controllers");
const { validateSignin } = require("./middleware/Usermiddleware");

const router = express.Router();

/* router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete); */

router.post("/user/signin", validateSignin, UserController.signin);
module.exports = router;

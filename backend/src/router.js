const express = require("express");

const { UserController } = require("./controllers");

const router = express.Router();

/* router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete); */

router.get("/user", UserController.browse);
router.get("/user/:id", UserController.read);
router.post("/user", UserController.add);

module.exports = router;

const express = require("express");
const {
  UserController,
  ArtworkController,
  FilterController,
} = require("./controllers");
// const { ProfilController } = require("./controllers");
const { validateSignin } = require("./middleware/Usermiddleware");
const { checkedForEmail } = require("./middleware/Auth");

const router = express.Router();

/* router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete); */

router.post("/user/signin", validateSignin, UserController.signin);
router.post("/user/login", checkedForEmail, UserController.login);

router.get("/projects", ArtworkController.browse);

router.get("/filters/:table", FilterController.browse);

// router.get("/profil", ProfilController.findAll);

/* router.get('/profil/:id', ProfilController.findOne);
router.post('/profil', ProfilController.postprofil);
router.put('/profil/:id', ProfilController.updateprofil);
router.delete('/profil/:id', ProfilController.deleteprofil); */
module.exports = router;

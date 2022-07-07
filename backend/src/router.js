const express = require("express");
const {
  UserController,
  ArtworkController,
  FilterController,
  SkillsController,
  ContractTypeController,
  SoftwareController,
  UserTypeController,
  BudgetController,
  TimeframeController,
  TypeAccountController,
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
router.get("/usertype", UserTypeController.browse);
router.get("/softwareused", SoftwareController.browse);

router.get("/skills", SkillsController.browse);

router.get("/contracttype", ContractTypeController.browse);

router.get("/filters/:table", FilterController.browse);

/* router.post("/mycreations", MyCreationsUploadController.browse); */

router.get("/typeaccount", TypeAccountController.browse);

router.get("/timeframe", TimeframeController.browse);
router.get("/budget", BudgetController.browse);

// router.get("/profil", ProfilController.findAll);

/* router.get('/profil/:id', ProfilController.findOne);
router.post('/profil', ProfilController.postprofil);
router.put('/profil/:id', ProfilController.updateprofil);
router.delete('/profil/:id', ProfilController.deleteprofil); */
module.exports = router;

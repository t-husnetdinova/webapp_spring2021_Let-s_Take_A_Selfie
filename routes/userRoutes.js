// define router object
const router = require("express").Router(),
    usersController = require("../controllers/usersController");

// user routes
router.post("/", usersController.authenticate);
router.post("/signup", usersController.validate, usersController.create, usersController.redirectView);
router.get("/logout", usersController.logout, usersController.redirectView);

module.exports = router;
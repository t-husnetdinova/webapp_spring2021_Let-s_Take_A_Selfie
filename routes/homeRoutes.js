// define router object
const router = require("express").Router(),
    homeController = require("../controllers/homeController");

// home routes
router.get("/account", homeController.account);

module.exports = router;
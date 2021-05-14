const usersController = require("../controllers/usersController");

// define router object
const router = require("express").Router(),
    userController = require("../controllers/usersController");

// api routes
router.get("/users", usersController.index, usersController.filterUserFollows, usersController.respondJSON);
router.get("/users/:id/follow", usersController.follow, usersController.respondJSON);
router.use(usersController.errorJSON);

module.exports = router;
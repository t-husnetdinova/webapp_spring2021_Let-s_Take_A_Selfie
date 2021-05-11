// define router object
const router = require("express").Router(),
    errorController = require("../controllers/errorController");

// error handling
router.use(errorController.pageNotFoundError);
router.use(errorController.internalServerError);

module.exports = router;
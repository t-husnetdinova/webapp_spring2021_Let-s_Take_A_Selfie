// define router object
const router = require("express").Router(),
    postsController = require("../controllers/postsController");

// post routes
router.get("/", postsController.index, postsController.indexView);
router.get("/new", postsController.new);
router.post("/create", postsController.create, postsController.redirectView);
router.get("/:id", postsController.show, postsController.showView);
router.get("/:id/edit", postsController.edit);
router.put("/:id/update", postsController.update, postsController.redirectView);
router.delete("/:id/delete", postsController.delete, postsController.redirectView);
router.get("/follow", postsController.follow, postsController.redirectView);

module.exports = router;
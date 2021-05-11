// the glue that keeps all the routes together
// defining how we use each of the routing objects

const { route } = require("./userRoutes");

//require routing files
const router = require("express").Router(),
userRoutes = require("./userRoutes"),
postRoutes = require("./postRoutes"),
homeRoutes = require("./homeRoutes"),
errorRoutes = require("./errorRoutes");

// define namespaces for routes
router.use("/", userRoutes); // I think
router.use("/posts", postRoutes);
router.use("/", homeRoutes);
router.use("/", errorRoutes);

module.exports = router;
const express = require("express"),
    app = express(),
    router = express.Router(),
    layouts = require("express-ejs-layouts"),
    mongoose = require("mongoose"),

    // controllers
    homeController = require("./controllers/homeController"),
    errorController = require("./controllers/errorController"),
    usersController = require("./controllers/usersController"),
    postsController = require("./controllers/postsController")

    // dependencies
    methodOverride = require("method-override"),
    passport = require("passport"),
    cookieParser = require("cookie-parser"),
    expressSession = require("express-session"),
    expressValidator = require("express-validator"),
    connectFlash = require("connect-flash"),
    User = require("./models/user");

// mongodb things
mongoose.connect(
    "mongodb://localhost:27017/lets_take_a_selfie",
    { useNewUrlParser: true }
);
mongoose.set("useCreateIndex", true);

// define port
app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

router.use(methodOverride("_method", {
    methods: ["POST", "GET",]
}));
router.use(express.json());

router.use(layouts);
router.use(express.static("public"));
router.use(expressValidator());
router.use(
    express.urlencoded({
        extended: false
    })
);

router.use(cookieParser("my_passcode"));
router.use(expressSession({
    secret: "my_passcode",
    cookie: {
        maxAge: 360000
    },
    resave: false,
    saveUninitialized: false
}));

router.use(connectFlash());

router.use(passport.initialize());
router.use(passport.session());
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

router.use((req, res, next) => {
    console.log("recieved" + req.url)
    res.locals.loggedIn = req.isAuthenticated();
    res.locals.currentUser = req.user;
    res.locals.flashMessages = req.flash();
    next();
})

router.get("/", postsController.index, postsController.indexView);
app.use( express.static( "../public/img" ) );

// user routes
router.post("/", usersController.authenticate);
router.post("/signup", usersController.validate, usersController.create, usersController.redirectView);
router.get("/logout", usersController.logout, usersController.redirectView);

// other routes
router.get("/search", homeController.results);
router.get("/settings", homeController.settings);
router.get("/account", homeController.account);

// post routes
router.get("/posts", postsController.index, postsController.indexView);
router.get("/posts/new", postsController.new);
router.post("/posts/create", postsController.create, postsController.redirectView);
router.get("/posts/:id", postsController.show, postsController.showView);
router.get("/posts/:id/edit", postsController.edit);
router.put("/posts/:id/update", postsController.update, postsController.redirectView);
router.delete("/posts/:id/delete", postsController.delete, postsController.redirectView);

// error handling
router.use(errorController.pageNotFoundError);
router.use(errorController.internalServerError);

app.use("/", router);

app.listen(app.get("port"), () => {
    console.log(`Server is running on port ${app.get("port")}`)
});
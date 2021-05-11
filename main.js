const express = require("express"),
    app = express(),
    router = require('./routes/index'),
    layouts = require("express-ejs-layouts"),
    mongoose = require("mongoose"),

    postsController = require("./controllers/postsController"),

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

app.use(methodOverride("_method", {
    methods: ["POST", "GET",]
}));
app.use(express.json());

app.use(layouts);
app.use(express.static("public"));
app.use(expressValidator());
app.use(
    express.urlencoded({
        extended: false
    })
);

app.use(cookieParser("my_passcode"));
app.use(expressSession({
    secret: "my_passcode",
    cookie: {
        maxAge: 360000
    },
    resave: false,
    saveUninitialized: false
}));

app.use(connectFlash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    console.log("recieved" + req.url)
    res.locals.loggedIn = req.isAuthenticated();
    res.locals.currentUser = req.user;
    res.locals.flashMessages = req.flash();
    next();
})

// I would like to get this out of here
// we need this here, removing causes server error
//because posts are technically our landing page
app.get("/", postsController.index, postsController.indexView);

app.use( express.static( "../public/img" ) );

app.use("/", router);

app.listen(app.get("port"), () => {
    console.log(`Server is running on port ${app.get("port")}`)
});
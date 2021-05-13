const passport = require("passport");

const User = require("../models/user"),

    getUserParams = body => {
        return {
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email,
            dateOfBirth: body.dateOfBirth,
            username: body.username,
            password: body.password
        };
    };

module.exports = {
    postedSignUpForm: (req, res) => {
        res.render("index")
    },

    logIn: (req, res) => {
        // res.render("home");
        User.findOne({ email: req.body.email }).select('email password').exec(function (err, user) {
            if (user) {
                res.render("index");
            }
            else {
                res.render("error");
            }
        });
    },

    validate: (req, res, next) => {
        req.sanitizeBody("email").normalizeEmail({
            all_lowercase: true
        }).trim();

        req.check("email", "Email is not valid!").isEmail();
        req.check("password", "Password cannot be empty!").notEmpty();

        req.getValidationResult().then((error) => {
            if (!error.isEmpty()) {
                let messages = error.array().map(e => e.msg);
                req.flash("error", messages.join(" and "));
                req.skip = true;
                // need to redirect to sign up modal somehow
                // res.locals.redirect = "/users/new";
                next();
            }
            else {
                next();
            }
        });
    },

    create: (req, res, next) => {
        if (req.skip) return next();

        let userParams = getUserParams(req.body);
        let newUser = new User(userParams);

        User.register(newUser, req.body.password, (error, user) => {
            if (user) {
                req.flash("success", "User account successfully created!");
                res.locals.redirect = "/";
                next();
            }
            else {
                req.flash("error", `failed to create user account: ${error.message}`);
                req.locals.redirect = "/";
                next();
            }
        });
    },

    redirectView: (req, res, next) => {
        let redirectPath = res.locals.redirect;
        if (redirectPath != undefined) res.redirect(redirectPath);
        else next();
    },

    // retrieves the posted data from the req body and saves a new user
    saveUser: (req, res) => {
        let newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            dateOfBirth: req.body.dateOfBirth,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        })
        newUser.save()
            .then(() => {
                res.render("index");
            })
            .catch(error => {
                res.send(error);
            })
    },

    validate: (req, res, next) => {
        req.sanitizeBody("email").normalizeEmail({
            all_lowercase: true
        }).trim();

        req.check("email", "Email is not valid!").isEmail();
        req.check("password", "Password cannot be empty!").notEmpty();

        req.getValidationResult().then((error) => {
            if (!error.isEmpty()) {
                let messages = error.array().map(e => e.msg);
                req.flash("error", messages.join(" and "));
                req.skip = true;
                // need to redirect to sign up modal somehow
                // res.locals.redirect = "/users/new";
                next();
            }
            else {
                next();
            }
        });
    },
    authenticate: passport.authenticate("local", {
        failureRedirect: "/",
        failureFlash: "Login failed! Check your email or password!",
        successRedirect: "/",
        successFlash: "Logged in!"
    }),
    logout: (req, res, next) => {
        req.logout();
        req.flash("success", "Successfully logged out!");
        res.locals.redirect = "/";
        next();
    }
};
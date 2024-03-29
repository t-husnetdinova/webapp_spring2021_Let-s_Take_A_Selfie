const post = require("../models/post");
const Post = require("../models/post");

module.exports = {
    index: (req, res, next) => {
        Post.find()
            .then(posts => {
                res.locals.posts= posts;
                next();
            })
            .catch(error => {
                console.log(`Error fetching post data: ${error.message} `);
                next(error);
            })
    },
    indexView: (req, res) => {
        res.render("posts/index");
    },
    new: (req, res) => {
        res.render("posts/new");
    },
    create: (req, res, next) => {
        let newPost = new Post({
            title: req.body.title,
            description: req.body.description,
            img: req.body.img,
            hashtags: req.body.hashtags.split(" "),
            user: req.user,
            postedBy: req.user.username
        });
        Post.create(newPost)
            .then(post => {
                res.locals.post = post;
                res.locals.redirect = "/";
                next();
            })
            .catch(error => {
                console.log(`Error saving post: ${error.message}`);
                next(error);
            })
    },

    redirectView: (req, res, next) => {
        let redirectPath = res.locals.redirect;
        if (redirectPath != undefined) res.redirect(redirectPath);
        else next();
    },
    
    show: (req, res, next) => {
        let postId = req.params.id;
        Post.findById(postId)
            .then(post => {
                res.locals.post = post;
                next();
            })
            .catch(error => {
                console.log(`Error fetching post by ID: ${error.message}`);
                next(error);
            })
    },

    showView: (req, res) => {
        res.render("posts/show")
    },

    edit: (req, res, next) => {
        let postId = req.params.id;
        Post.findById(postId)
            .then(post => {
                res.render("posts/edit", { post: post });
            })
            .catch(error => {
                console.log(`Error loading post by ID: ${error.message}`);
                next(error);
            })
    },
    update: (req, res, next) => {
        let postId = req.params.id;

        var updatedPost = {};
        updatedPost.title = req.body.title;
        updatedPost.description =  req.body.description;
        updatedPost.img =  req.body.img;
        updatedPost.hashtags =  req.body.hashtags;
        // other potential field that can be edited

        Post.findByIdAndUpdate(postId, updatedPost)
        .then(post => {
            res.locals.post = post;
            res.locals.redirect = "/";
            next();
        })
        .catch(error => {
            console.log(`Error loading post by ID: ${error.message}`);
            next(error);
        })
    }, 
    delete: (req, res, next) => {
        let postId = req.params.id;
        Post.findByIdAndRemove(postId)
    
        .then(() => {
            res.locals.redirect = "/";
            next();
        })
        .catch(error => {
            console.log(`Error loading post by ID: ${error.message}`);
            next(error);
        })
    },
    
    follow: (req, res, next) => {
        let userId = req.params.user._id,
        currentUser = req.user;

    if (currentUser) {
        User.findByIdAndUpdate(currentUser, {
            $addToSet: {
                following: userId   
            }
        })
            .then(() => {
                res.locals.success = true;
                next();
            })
            .catch(error => {
                next(error);
            });
    } else {
        next(new Error("User must log in."));
    }
    res.locals.redirect = "/";
    }
}
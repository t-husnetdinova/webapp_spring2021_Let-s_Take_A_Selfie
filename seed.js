"use strict";

const mongoose = require("mongoose"),
    User = require("./models/user");
    Post = require("./models/post");
    
mongoose.connect(
    "mongodb://localhost:27017/lets_take_a_selfie",
    { useNewUrlParser: true }
);
mongoose.connection;

var contacts = [
    {
        title: "Post 1",
        description: "Post 1 body"
    },
    {
        title: "Post 2",
        description: "Post 2 body"
    },
    {
        title: "Post 3",
        description: "Post 3 body"
    },
    {
        title: "Post 4",
        description: "Post 4 body"
    },
];

User.deleteMany()
    .exec()
    .then(() => {
        console.log("User data is empty!");
    });

var commands = [];

contacts.forEach(c => {
    commands.push(
        Post.create({
            title: c.title,
            description: c.description
        })
    );
});

Promise.all(commands)
    .then(r => {
        console.log(JSON.stringify(r));
        mongoose.connection.close();
    })
    .catch(error => {
        console.log(`ERROR: ${error}`);
    });

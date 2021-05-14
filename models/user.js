const passportLocalMongoose = require("passport-local-mongoose");
const mongoose = require("mongoose"),
    { Schema } = require("mongoose"),
Post = require("./post");
User = require("./user");

userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    username: {
        type: String,
        require: true,
        unique: true
    },
    post: [{type: mongoose.Schema.Types.ObjectId, ref: Post}],
    following: [{type: mongoose.Schema.Types.ObjectId, ref: User}]
},
    {
        timestamps: true
    }
);

userSchema.plugin(passportLocalMongoose, {
    usernameField: "email"
});

module.exports = mongoose.model("User", userSchema);
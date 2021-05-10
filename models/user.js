const passportLocalMongoose = require("passport-local-mongoose");
const mongoose = require("mongoose"),
    { Schema } = require("mongoose")

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

    // Maybe remove?
    securityQuestion1: {
        type: String,
    },
    securityAnswer1: {
        type: String,
    },
    securityQuestion2: {
        type: String,
    },
    securityAnswer2: {
        type: String,
    },
    securityQuestion3: {
        type: String,
    },
    securityAnswer3: {
        type: String,
    }
},
    {
        timestamps: true
    }
);

userSchema.plugin(passportLocalMongoose, {
    usernameField: "email"
});

module.exports = mongoose.model("User", userSchema);
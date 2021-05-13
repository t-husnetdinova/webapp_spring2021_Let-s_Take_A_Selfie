const mongoose = require("mongoose"),
    { Schema } = require("mongoose"),
    postSchema = new Schema(
        {
            img: {
                data: Buffer,
                contentType: String
            },
            title: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            createdAt: {
                type: Date,
                deafault: Date.now
            },
            hashtags: {type: [String], index: true},
            },
        {
            timestamps: true
        }
    );

postSchema.pre('save', function (next) {
    next();
});

module.exports = mongoose.model("Post", postSchema);
const mongoose = require("mongoose"),
{ Schema } = require("mongoose"),
hashtagSchema = new Schema(
    {
        text: {
            type: String,
            required: true 
        }
    },
    {
        timestamps: true
    }
);

hashtagSchema.pre('save', function(next) {
    next();
});

module.exports = mongoose.model("Hashtag", hashtagSchema);
const mongoose = require("mongoose"),
{ Schema } = require("mongoose"),
commentSchema = new Schema(
    {
        user_id: { 
            type: Schema.Types.ObjectId, 
            ref: "userSchema", 
            required: true 
        }, //Comment creator
        username: { 
            type: String 
        },
        text: {
            type: String, 
            required: true 
        },
        post_id: { 
            type: Schema.Types.ObjectId, 
            ref: "postSchema", required: true 
        },
        createdAt: {
            type: Date, 
            expires: 604800, 
            default: Date.now 
        }
    },
    {
        timestamps: true
    }
);

commentSchema.pre('save', function(next) {
    next();
});

module.exports = mongoose.model("Comment", commentSchema);
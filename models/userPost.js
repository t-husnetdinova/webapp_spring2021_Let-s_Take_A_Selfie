const mongoose = require("mongoose"),
{ Schema } = require("mongoose"),
userPostSchema = new Schema({
    user_id: { 
        type: Schema.Types.ObjectId, 
        ref: "userSchema", 
        required: true 
    },
    post_id: { 
        type: Schema.Types.ObjectId, 
        ref: "postSchema", 
        required: true 
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

userPostSchema.pre('save', function(next) {
    next();
});

module.exports = mongoose.model("UserPost", userPostSchema);
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_v2", {useMongoClient: true});
mongoose.Promise = global.Promise;

//USER Model - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ]
});
module.exports = mongoose.model("User", userSchema);
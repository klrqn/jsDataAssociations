var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_v2", {useMongoClient: true});
mongoose.Promise = global.Promise;

//POST MODEL - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post", postSchema);
module.exports = Post;
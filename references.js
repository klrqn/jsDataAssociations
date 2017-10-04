// ONE TO MANY ASSOCIATIVE DATA
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_v2", {useMongoClient: true});
mongoose.Promise = global.Promise;

// 2 MODELS / SCHEMAS

//POST - title - content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post", postSchema);
//USER - email, name
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
var User = mongoose.model("User", userSchema);

// User.create({
//     email: "bob@belcher.com",
//     name: "Bob Belcher"
// });


// CREATE and LINK POSTS to USER

// Post.create({
//     title: "How to cook the fifth best burger",
//     content: "gibberish"
// }, function(err, post){
//     User.findOne({email: "bob@belcher.com"}, function(err, foundUser){
//         if (err)
//             console.log(err)
//         else {
//             foundUser.posts.push(post);
//             foundUser.save(function(err, data){
//                 if (err)
//                     console.log(err);
//                 else
//                     console.log(data);
//             });
//         }
//     });
// });

// Find User
// Find all posts for that user

User.findOne({email: "bob@belcher.com"}).populate("posts").exec(function(err, user){
    if(err){
        console.log(err)
    } else {
        console.log(user);
    }
});
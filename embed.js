// ONE TO MANY ASSOCIATIVE DATA
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo", {useMongoClient: true});
mongoose.Promise = global.Promise;

// 2 MODELS

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
    posts: [postSchema]
});
var User = mongoose.model("User", userSchema);

// // Create a new User
// var newUser = new User({
//     email: "hermione@hogwarts.edu",
//     name: "Hermione Granger"
// });

// newUser.posts.push({
//     title: "How to brew polyjuice potions",
//     content: "Just kidding, go to potions class already"
// });

// newUser.save(function(err, user){
//     if(err){
//         console.log("User was not saved: " + err);
//     } else {
//         console.log("User Saved: " + user);
//     }
// });

// Create a new Post
// var newPost = new Post({
//     title: "Reflections on Apples",
//     content: "I sure do like apples \n even though \n they aren't the best"
// });

// newPost.save(function(err, post){
//     if(err){
//         console.log("Post was not saved: " + err);
//     } else {
//         console.log("Post Saved: " + post);
//     }
// });

// {
//     email: "asdf",
//     name: "asdf",
//     posts: [
//         {title: "asdf", content: "asdf"}
//         {title: "asdf", content: "asdf"}
//         {title: "asdf", content: "asdf"}
//         ]
// }

User.findOne({name: "Hermione Granger"}, function(err, user){
    if(err){
        // console.log(err);
    } else {
        user.posts.push({
            title: "Three things I really hate",
            content: "Voldemort, Voldemort, and Voldemort"
        });
        user.save(function(err, user){
            if(err)
                console.log(err);
            else
                console.log(user);
        });
    }
});
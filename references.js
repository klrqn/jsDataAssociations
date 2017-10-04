// ONE TO MANY ASSOCIATIVE DATA
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_v2", {useMongoClient: true});
mongoose.Promise = global.Promise;

var Post = require("./models/post");
var User = require("./models/user");

// User.create({
//     email: "bob@belcher.com",
//     name: "Bob Belcher"
// });


// CREATE and LINK POSTS to USER

Post.create({
    title: "How to cook the sixth best burger",
    content: "sixth gibberish"
}, function(err, post){
    User.findOne({email: "bob@belcher.com"}, function(err, foundUser){
        if (err)
            console.log(err)
        else {
            foundUser.posts.push(post);
            foundUser.save(function(err, data){
                if (err)
                    console.log(err);
                else
                    console.log(data);
            });
        }
    });
});


// FIND USER and ALL POSTS from that USER

// User.findOne({email: "bob@belcher.com"}).populate("posts").exec(function(err, user){
//     if(err){
//         console.log(err)
//     } else {
//         console.log(user);
//     }
// });
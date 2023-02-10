var database = [
    {
        username: "danny",
        password: "dgpassword"
    },
    {
        username: "grant",
        password: "gtpassword"
    },
    {
        username: "nico",
        password: "nbpassword"
    },
    {
        username: "denzel",
        password: "dbpassword"
    }
];

var wwPost = {
    imageURL: "https://industrialscripts.com/wp-content/uploads/2021/04/I-am-the-one-who-knocksI-am-the-danger-scene.jpg",
    caption: "I am the danger"
};
var jpPost = {
    imageURL: "https://pyxis.nymag.com/v1/imgs/661/329/d25b69e5759b595ae6c32d1a9d8cc759b5-08-aaron-paul-bitch.2x.h473.w710.jpg",
    caption: "Yo, gatorade me"
}
var hsPost = {
    imageURL: "https://www.indiewire.com/wp-content/uploads/2019/07/BreakingBad_Hank.png",
    caption: "I'll put you under the jail"
}
var gfPost = {
    imageURL: "https://media.vanityfair.com/photos/587ad80e2a677fe11973b503/master/pass/giancarlo-espositoo.jpg",
    caption: "never make the same mistake twice"
}

var feed = [
    {
        username: "walter white",
        post: wwPost
    },
    {
        username: "jessie pinkman",
        post: jpPost
    },
    {
        username: "hank schrader",
        post: hsPost
    },
    {
        username: "gustavo fring",
        post: gfPost
    }
];

//Sign In Validation
function signInValidation(user, pass){
    for(var i = 0; i < database.length; i++){
        if(database[i].username === user && database[i].password === pass){
            return(true);
        }
    }
    return(false);
}


//Display Feed
function displayFeed(feed){
    console.log("Display Feed");
    var postsContainer = document.getElementsByClassName("posts")[0];

    for(var i = 0; i < feed.length; i++){
        console.log(i);

        var div = document.createElement("div");
        var inner = document.createElement("div");
        inner.className = "inner";
        
        var username = document.createElement("h3");
        username.innerHTML = feed[i].username;

        var image = document.createElement("img");
        image.src = feed[i].post.imageURL;
        image.width = 300;
        image.height = 200;
        image.style.borderRadius = "25px";

        var caption = document.createElement("p");
        caption.innerHTML = feed[i].post.caption;

        inner.appendChild(username);
        inner.appendChild(image);
        inner.appendChild(caption);

        div.appendChild(inner);

        postsContainer.appendChild(div);
    }

}

// Display Password Keys
function displayKeys(){
    for(var i = 0; i < database.length; i++){
        console.log("Display Keys");

        var postsContainer = document.getElementsByClassName("posts")[0];

        var div = document.createElement("div");
        var inner = document.createElement("div");
        inner.className = "inner";
        
        var username = document.createElement("p");
        username.innerHTML = "username: " + database[i].username;

        var password = document.createElement("p");
        password.innerHTML = "password: " + database[i].password;

        inner.appendChild(username);
        inner.appendChild(password);

        div.appendChild(inner);

        postsContainer.appendChild(div);
    }
}

//Sign In
function signIn(user, pass, feed){
    if(signInValidation(user, pass)){
        displayFeed(feed);
    }
    else{
        displayKeys();
    }
}

//Get Username & Password
var usernamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("What is your password?");
signIn(usernamePrompt, passwordPrompt, feed);
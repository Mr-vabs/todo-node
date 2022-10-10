const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

// Variables 

let items = ["Node rocks!", "React is awful.", "MERN is greedy."];

app.get("/", function(req, res){
    let today = new Date();
    // let resmesg = (currDay === 6 || currDay === 0) ? "Weekend, Let's watch movies and chill bro!" : "Weekday, Get back to office man!";
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    let currDay = today.toLocaleDateString("hi-IN", options);
    res.render('list', {day: currDay, newListItems: items});
});

app.post("/", function(req, res){
    let item = req.body.newItem;
    items.push(item);
    res.redirect("/");
    // console.log(formInput);
});

app.listen(3000, function(){
    console.log("Server running at port 3000");
});
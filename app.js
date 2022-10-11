const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');

const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

const items = ["Node rocks!", "React is awful.", "MERN is greedy."];

app.get("/", function(req, res){
    let currDay = date.getDate();
    res.render('list', {day: currDay, newListItems: items});
});

app.post("/", function(req, res){
    let item = req.body.newItem;
    items.push(item);
    res.redirect("/");
});

app.listen(3000, function(){
    console.log("Server running at port 3000");
});
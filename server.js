const express = require('express')
var PORT = process.env.PORT || 3000;
var app = express();

//middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true}));
app.use(express.json())
//handlebars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}))
app.set("view engine", "handlebars");

const routes = require('./controllers/burgers_controller.js')
app.use(routes)

app.listen(PORT, function(){
    console.log("app now listening at " + PORT)
});
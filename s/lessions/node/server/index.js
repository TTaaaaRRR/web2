var express = require("express");
var app = express();

app.get("/test", function(request, response){
    response.send("Hello test!");
});
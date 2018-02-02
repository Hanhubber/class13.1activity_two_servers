var http = require("http")

var PORTONE = 7000; 
function handleRequest(request, response){ response.end("It works great!! Nice Path Hit:  " + request.url); }
var serverOne = http.createServer(handleRequestOne); 

serverOne.listen(PORTONE, function() { console.log("Server carefully listening on : http://localhost:" + PORTONE);});

var PORTTWO = 7500; 
function handleRequest(request, response){ response.end("It doesn't work!! Bad Path Hit:  " + request.url); }
var serverTwo = http.createServer(handleRequestTwo); 

serverTwo.listen(PORTTWO, function() { console.log("Server neglecting on : http://localhost:" + PORTTWO);});
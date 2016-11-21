// bring in the express code
var express = require('express');
var request = require('request');

// create our express server (app object)
var app = express();

// define the port that the server will run on
var port = 8080;

// express static fileserver middleware
// this will serve any files that live in the given folder
// it is very typical that this will be the public folder
// the public folder should be where all your front end files go (html, css, js)
app.use(express.static("./"));

// define the api/beers route for OUR server, which makes a request to the breweryDB and sends the response data back to the client
app.get('/api/beers', function(req,res){
	console.log(req.query);
	request('http://api.brewerydb.com/v2/beers?key=4d0cda6821ed3d18e052b245d3c48b2a&name='+req.query.name, function(err, response, body) {
		res.send(body); // send the body (beer data) to the client
	});
})

// tell the server to listen for connections on a given port
app.listen(port, (err)=>{
    if(err) {
        console.log("Server error ", err);
    } else {
        console.log("Server started!");
    }
});
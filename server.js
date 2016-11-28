'use strict';

const ejs = require('ejs');
const http = require('http');
const httpdispatcher = require('httpdispatcher');

const DISPATCHER = new httpdispatcher();
const PORT=8888;

DISPATCHER.setStaticDirname('res');
DISPATCHER.setStatic('/_/');

DISPATCHER.onGet('index.html', function(req, res) {
    const template_text = "Hello";
    const options = {};
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(ejs.render(template_text, options));
});

DISPATCHER.onGet("/page1", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Page One');
});

DISPATCHER.onPost("/post1", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Got Post Data');
});

function handleRequest(request, response){
    try {
        console.log(request.url);
        DISPATCHER.dispatch(request, response);
    } catch(err) {
        console.log(err);
    }
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});

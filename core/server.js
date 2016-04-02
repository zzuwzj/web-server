var http = require('http');
var url = require('url');

function start(route, handler) {
    function handleRequest(req, res) {
        var pathName = url.parse(req.url).pathname;
        console.log('Request for ' + pathName + ' received.');

        route(pathName, handler, res);
    }

    http.createServer(handleRequest).listen('8089');
    console.log('Server started to listen 8089 port.')
};

exports.start = start;

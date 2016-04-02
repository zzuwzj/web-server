function route(pathName, handler, res) {
    console.log('Route for ' + pathName);
    if (typeof handler[pathName] === 'function') {
        handler[pathName](res);
    } else {
        console.log('Handler for ' + pathName + ' not found!');
        res.writeHead('404', {
            'Content-Type': 'text/plain'
        });
        res.write('404 Not found.');
        res.end();
    }
}

exports.route = route;

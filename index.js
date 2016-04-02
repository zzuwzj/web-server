var server = require('./core/server');
var router = require('./core/router');
var requestHandler = require('./modules/requestHandler');

var handler = {};
handler['/'] = requestHandler.list;
handler['/get'] = requestHandler.get;
handler['/post'] = requestHandler.post;
handler['/put'] = requestHandler.put;
handler['/list'] = requestHandler.list;
handler['/delete'] = requestHandler.del;

server.start(router.route, handler);

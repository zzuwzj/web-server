function list(res) {
    console.log('Request list handler.');
    handleRes(res, 'list');
}

function get(res) {
    console.log('Request get handler.');
    handleRes(res, 'get');
}

function post(res) {
    console.log('Request post handler.');
    handleRes(res, 'post');
}

function put(res) {
    console.log('Request put handler.');
    handleRes(res, 'put');
}

function del(res) {
    console.log('Request delete handler.');
    handleRes(res, 'delete');
}

function query(res) {
    console.log('Request query handler.');
    handleRes(res, 'query');
}

function handleRes(res, action) {
    res.writeHead('200', {
        'Content-Type': 'text/plain'
    });
    res.write('Do ' + action);
    res.end();
}

exports.list = list;
exports.get = get;
exports.post = post;
exports.put = put;
exports.del = del;

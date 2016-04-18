var db = require('framework/data/db/mongoDB');

function add(name, values) {
    console.log('insert data');
}

function delete(name) {
    console.log('delete data');
}

function update(name, values) {
    console.log('update data');
}

function query(name) {
    console.log('query data');
}

exports.add = add;
exports.delete = delete;
exports.update = update;
exports.query = query;

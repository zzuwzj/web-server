function read(filepath) {
    console.log('read file:' + filepath);
}

function write(filepath, data) {
    console.log('write to file:' + filepath);
}

function append(filepath, data) {
    console.log('append to file:' + filepath);
}

function remove(filepath) {
    console.log('delete file:' + filepath);
}

exports.read = read;
exports.write = write;
exports.append = append;
exports.remove = remove;

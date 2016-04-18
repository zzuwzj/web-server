var dictInst = {};

function getDBInstance(type) {
    if (dictInst[type]) {
        return dictInst[type];
    } else {
        dictInst[type] = require(type);
    }
}

exports.getDBInstance = getDBInstance;
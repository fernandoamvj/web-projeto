var mysql = require('mysql');
var createDBConnection = function() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'famv29',
        database: 'campeonatos'
    });
}

module.exports = function() {
    return createDBConnection;
}

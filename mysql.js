const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

connection.connect((err) => {
    if (err) throw err;
});

module.exports.doQuery = function(query, callback) {
    connection.query(query, (err,rows) => {
        if(err) throw err;
        callback(rows);
    });
}

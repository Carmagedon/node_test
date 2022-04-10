require('dotenv').config();
const express = require('express');
const app = express()
const port = 80;
const mysql = require('./mysql');

app.get('/', (req, res) => {
    mysql.doQuery('SELECT * FROM `users`', function(result) {
        res.json(result);
    });
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})

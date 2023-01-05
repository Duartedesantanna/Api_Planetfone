const express = require('express');

const cors = require('cors');

function app() {
    this.app = express();
    this.app.use(
        cors({
            origin: '*',
            methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
        })
    )
    require('./routes');

    return this.app;
}

module.exports = app;
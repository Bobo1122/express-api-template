const express = require("express");
//middlewares
const morgan = require("morgan");
const compression = require("compression");
const helmet = require("helmet");
const middlewares = require("./middlewares");

const api = require('./api');
const app = express();

app.use(morgan("tiny"));
app.use(compression());
app.use(helmet());
app.use(express.json()) //body parser

app.get('/', (req, res) => {
    res.json({
        message: "👋 Hello World! 🌍"
    })
});

app.use('/api/v1', api);

app.use(middlewares.notFoundHandler);
app.use(middlewares.errorHandler);

module.exports = app;
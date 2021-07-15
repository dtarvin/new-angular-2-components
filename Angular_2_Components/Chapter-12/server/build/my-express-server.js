"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
app.get('/', (req, res) => res.send('Hello from Express'));
app.get('/products', (req, res) => res.send('Got a request for reviews'));
const server = app.listen(8000, "localhost", () => {
    console.log('Listening on localhost:8000');
});

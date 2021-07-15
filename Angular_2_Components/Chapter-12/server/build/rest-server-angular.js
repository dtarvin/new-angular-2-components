"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const app = express();
app.use('/', express.static(path.join(__dirname, 'public')));
const products = [
    { id: 0, title: "Prowl", price: 17.99 },
    { id: 1, title: "Starscream", price: 32.99 },
    { id: 2, title: "Megatron", price: 44.99 }
];
function getProducts() {
    return products;
}
app.get('/api/products', (req, res) => {
    res.json(getProducts());
});
function getProductById(productId) {
    return products.find(p => p.id === productId);
}
app.get('/api/products/:id', (req, res) => {
    res.json(getProductById(parseInt(req.params.id)));
});
const server = app.listen(8000, "localhost", () => {
    console.log('Listening on localhost:8000');
});

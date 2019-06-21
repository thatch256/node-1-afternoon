const express = require('express')
const products = require('./products.json')
const getProducts = require('./server/getProducts.js')
const getProduct = require('./server/getProduct.js')

const app = express()
const port = 5000

app.get('/api/products', getProducts)
app.get('/api/product/:id', getProduct)

app.listen(port, () => {
    console.log('Waiting in the shadows...');
})
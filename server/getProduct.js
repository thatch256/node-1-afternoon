const products = require('../products.json')

const getProduct = (req, res) => {
    let item = products.find(value => value.id === +(req.params.id));
    if (!item) {
        return res.status(500).send("Item not in list");
    }
    res.status(200).send(item);
    }

    module.exports = getProduct
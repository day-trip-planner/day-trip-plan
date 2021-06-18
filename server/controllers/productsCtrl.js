module.exports = {
    getProducts: (req, res) => {
        const db = req.app.get('db')

        db.products.get_products()
        .then(products => {
            res.status(200).send(products)
        })
        .catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
    },

    addProducts: (req, res) => {
        const db = req.app.get('db')
        const {product_id} = req.params
    
        db.products.add_products(product_id, name, price)
            .then((product) => {
                res.status(200).send(product)
            })
            .catch(err => {
                console.log(err)
                res.status(533).send(err)
            })
    }
}
module.exports = {
    getProducts: (req, res) => {
        const db = req.app.get('db')

        db.product.get_products()
        .then(product => {
            res.status(200).send(product)
        })
        .catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
    }

    // addProduct: (req, res) => {
    //     const db = req.app.get('db')
    //     const {product_id} = req.params
    
    //     db.product.add_product(product_id, name, price)
    //         .then((product) => {
    //             res.status(200).send(product)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //             res.status(533).send(err)
    //         })
    // }
}
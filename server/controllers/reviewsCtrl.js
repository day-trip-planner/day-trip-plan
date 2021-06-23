module.exports = {
    getReview: (req, res) => {
     
      const db = req.app.get('db')
      const {user} = req.session
    
      if(!user){
        return res.status(511).send('User is not logged in.')
      }
      console.log(user)
      db.review.get_review_items(user.review_id).then(review => {
        res.status(200).send(review)
      }).catch(err => {
        console.log(err)
        res.status(500).send(err)
      })
    },
  
  
    addToReview: (req, res) => {
    
      const db = req.app.get('db')
      const {user} = req.session
      const {product_id} = req.params
      const {quantity} = res.body
      if(!user){
        return res.status(511).send("User is not logged in.")
      }
    
      db.review.add_to_review(user.review_id, product_id, quantity)
      .then((review) => {
        res.status(200).send(review)
      }).catch(err => {
        console.log(err)
        res.status(500).send(err)
      })
    },
  
  
    deleteItemFromReview: (req, res) => {
    
      const db = req.app.get('db')
      const {user} = req.session
      const {product_id} = req.params
      if(!user){
        return res.status(511).send('User is not logged in.')
      }
    
      db.review.delete_item_from_review(user.review_id, product_id)
      .then((review) => {
      
        res.status(200).send(review)
      }).catch(err => {
        console.log(err)
        res.status(500).send(err)
      })
    },
    changeReviewQty: (req, res) => {
    
      const db = req.app.get('db')
      const {user} = req.session
      const {product_id} = req.params
      const {quantity} = req.body
      if(!user){
        return res.status(511).send("User is not logged in.")
      } db.review.change_review_qty(user.review_id, product_id, quantity)
      .then((reviewProducts) => {
        res.status(200).send(reviewProducts)
      }).catch(err => {
        console.log(err)
        res.status(500).send(err)
      })
    }
  }

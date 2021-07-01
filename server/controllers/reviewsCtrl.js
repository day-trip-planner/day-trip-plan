module.exports = {
    getReview: (req, res) => {
     
      const db = req.app.get('db')
      const {user} = req.session
    
      if(!user){
        return res.status(511).send('User is not logged in.')
      }
      console.log(user)
      db.review.reviews(user.review_id).then(review => {
        res.status(200).send(review)
      }).catch(err => {
        console.log(err)
        res.status(597).send(err)
      })
    },
  
    addToReview: (req, res) => {
      const db = req.app.get('db')
      const {user} = req.session
      const {review_id} = req.params
      if(!user){
        return res.status(511).send("User is not logged in.")
      }
    
      db.review.post_reviews(user.review_id)
      .then((review) => {
        res.status(200).send(review)
      }).catch(err => {
        console.log(err)
        res.status(588).send(err)
      })
    },
  
  
    deleteItemFromReview: (req, res) => {
    
      const db = req.app.get('db')
      const {user} = req.session
      if(!user){
        return res.status(511).send('User is not logged in.')
      }
    
      db.review.delete_review(user.review_id)
      .then((review) => {
        res.status(200).send(review)
      }).catch(err => {
        console.log(err)
        res.status(513).send(err)
      })
    },
  
    editReview: (req, res) => {
      const db = req.app.get('db')
      const {user} = req.session
      const {review_id} = req.params
      const {star, review} = req.body
      if(!user){
        return res.status(511).send("User is not logged in.")
      } 
      db.review.edit_review(user.review_id, review_id, review, star)
      .then((review) => {
        res.status(200).send(review)
      }).catch(err => {
        console.log(err)
        res.status(500).send(err)
      })
    }

  }

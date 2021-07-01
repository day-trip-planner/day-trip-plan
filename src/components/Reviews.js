import ReactStars from "react-rating-stars-component";
import React from "react";
// import { render } from "react-dom";
 
const Reviews = (newRating) => {
  const ratingChanged = () => {

  }
  console.log(newRating);
  return(
  <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    isHalf={true}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffd700"
  />
  )
};
 
export default Reviews
// render(
//   <ReactStars
//     count={5}
//     onChange={ratingChanged}
//     size={24}
//     isHalf={true}
//     emptyIcon={<i className="far fa-star"></i>}
//     halfIcon={<i className="fa fa-star-half-alt"></i>}
//     fullIcon={<i className="fa fa-star"></i>}
//     activeColor="#ffd700"
//   />,
 
//   document.getElementById(Review)
// );
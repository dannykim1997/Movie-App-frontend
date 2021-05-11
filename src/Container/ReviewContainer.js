 import React from 'react';
 import Reviews from "../Components/Reviews"

 const ReviewContainer = (props) => {
     return (
         <div>
            {props.reviews.map(reviews => <Reviews reviews={reviews} />)}
         </div>
     )
 }

 export default ReviewContainer
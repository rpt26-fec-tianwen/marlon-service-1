import React from 'react';

const CardProductReview = (props) => {
  let stars = [];
  let rating = 0;

  for (let i = 0; i < rating; i++) {
    let solidStar = <i class="fas fa-star"></i>;
    stars.push(solidStar);
  }

  for (let i = 0; i < Math.abs(rating - 5); i++) {
    let blankStar = <i class="far fa-star"></i>;
    stars.push(blankStar);
  }

  return (
    <div className='card-contents-review'>
      {stars}
    </div>
  );
};

export default CardProductReview;

import React from 'react';

const CardProductReview = (props) => {
  let stars = [];
  let rating = 0;

  for (let i = 0; i < rating; i++) {
    let solidStar = <i className="fas fa-star"></i>;
    stars.push(solidStar);
  }

  for (let i = 0; i < Math.abs(rating - 5); i++) {
    let blankStar = <i className="far fa-star"></i>;
    stars.push(blankStar);
  }

  return (
    <div className='card-contents-review'>
      {stars}<span className='star-rating'>({rating})</span>
    </div>
  );
};

export default CardProductReview;

import React from 'react';
import CardProductType from './CardProductType.jsx';
import CardProductReview from './CardProductReview.jsx';

const CardTop = (props) => {
  console.log('Card Top:', props);

  return (
    <div className='card-contents-top-container'>
      <CardProductType/>
      <CardProductReview/>
    </div>
  )
};

export default CardTop;

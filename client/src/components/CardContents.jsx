import React from 'react';
import CardTop from './CardTop.jsx';
import CardProductTitle from './CardProductTitle.jsx';
import CardProductPrice from './CardProductPrice.jsx';
import CardProductColor from './CardProductColor.jsx';

const CardContents = (props) => {
  console.log('Card Contents:', props);

  return (
    <div className='card-contents-container'>
      <div className='card-contents'>
        <CardTop/>
        <CardProductTitle/>
        <CardProductPrice/>
        <CardProductColor/>
      </div>
    </div>
  );
};

export default CardContents;

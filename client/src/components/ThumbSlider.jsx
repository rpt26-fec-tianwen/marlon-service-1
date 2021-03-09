import React from 'react';
import Thumb from './Thumb.jsx';

const ThumbSlider = (props) => {
  let images = props.images;

  return (
    <div className='thumbs-slider-container'>
      {images.map((image, i) => {
        return <img key={i} src={image} />;
      })}
    </div>
  );
};

export default ThumbSlider;

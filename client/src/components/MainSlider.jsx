import React from 'react';

const MainSlider = (props) => {
  let images = props.images;

  return (
    <div className='main-slider-container'>
      {images.map((image, i) => {
        return <img key={i} src={image} />;
      })}
    </div>
  );
};

export default MainSlider;

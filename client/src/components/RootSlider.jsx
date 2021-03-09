import React from 'react';

const RootSlider = (props) => {
  let imagesCount = props.images.length;
  let ThumbImages = props.images.slice(0, imagesCount);
  let MainImages = props.images.slice(imagesCount/2);

  return (
    <h1>RootSlider</h1>
  );
};

export default RootSlider;

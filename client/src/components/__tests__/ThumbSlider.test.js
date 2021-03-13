import React from 'react';
import {render, screen, getAllByAltText} from '@testing-library/react';

import ThumbSlider from '../ThumbSlider.jsx';

describe('Thumb Slider should render thumb images', () => {
  it('Rendered right ammount of thumb images', () => {
    const title = 'ABISKO MIDSUMMER JACKET M';
    const images = ["https://fjallraven-card-images.s3-us-west-2.amazonaws.com/ABISKO_MIDSUMMER_JACKET_M/ABISKO_MIDSUMMER_JACKET_M_001.jpg", "https://fjallraven-card-images.s3-us-west-2.amazonaws.com/ABISKO_MIDSUMMER_JACKET_M/ABISKO_MIDSUMMER_JACKET_M_002.jpg", "https://fjallraven-card-images.s3-us-west-2.amazonaws.com/ABISKO_MIDSUMMER_JACKET_M/ABISKO_MIDSUMMER_JACKET_M_003.jpg", "https://fjallraven-card-images.s3-us-west-2.amazonaws.com/ABISKO_MIDSUMMER_JACKET_M/ABISKO_MIDSUMMER_JACKET_M_004.jpg"];

    render(<ThumbSlider title={title} images={images}/>);
    let allImgs = screen.getAllByAltText(title);
    console.log(allImgs);
  });
});
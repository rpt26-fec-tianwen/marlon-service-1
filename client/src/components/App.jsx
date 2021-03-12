import React from 'react';
import RootSlider from './RootSlider.jsx';
import CardContents from './CardContents.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productTitle: '',
      productPrice: '',
      productColors: [],
      productImages: [],
      productType: '',
      productRating: 0,
      currentColor: '',
      sliderPosition: 0,
      sliderPositionMax: 0
    }

    this.handleCarousel = this.handleCarousel.bind(this);
    this.handleThumbs = this.handleThumbs.bind(this);
  }

  handleThumbs(e) {
    let position = e.target.id;
    console.log(position);

    this.setState({sliderPosition: 620 * position});
  }

  handleCarousel(e) {
    let direction = e.target.id;

    if (direction === 'previous') {
      if (this.state.sliderPosition > 0) {
        this.setState((state) => ({
          sliderPosition: state.sliderPosition - 620
        }));
      }
    } else if (direction === 'next') {
      if (this.state.sliderPosition < this.state.sliderPositionMax) {
        this.setState((state) => ({
          sliderPosition: state.sliderPosition + 620
        }));
      }
    }
  }

  componentDidMount() {
    let productId = location.href.split('//').join('').split('/')[1];

    this.props.getProduct(productId)
      .then((product) => {
        this.setState(() => {
          return {productTitle: product.title};
        }, () => {
          this.setState(() => {
            return {productPrice: product.price};
          }, () => {
            this.setState(() => {
              return {productColors: JSON.parse(product.colors)};
            }, () => {
              this.setState(() => {
                return {productImages: JSON.parse(product.urls)};
              }, () => {
                this.setState(() => {
                  let max = (JSON.parse(product.urls).length / 2 - 1) * 620;
                  return {sliderPositionMax: max};
                });
              });
            });
          });
        });
      })
      .catch((error) => {
        console.log('App Error:', error);
      });
  }

  render() {
    console.log(this.state);
    return (
      <div className='product-card-container'>
        <RootSlider images={this.state.productImages} sliderPosition={this.state.sliderPosition} sliderPositionMax={this.state.sliderPositionMax} handleCarousel={this.handleCarousel} handleThumbs={this.handleThumbs}/>
        <CardContents/>
      </div>
    );
  }
}

export default App;

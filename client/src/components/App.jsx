import React from 'react';
import RootSlider from './RootSlider.jsx';

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
      currentColor: ''
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
              return {productColors: product.colors};
            }, () => {
              this.setState(() => {
                console.log(product.urls);
                return {productImages: product.urls};
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
        <RootSlider images={this.state.productImages}/>
      </div>
    );
  }
}

export default App;

import React from 'react';

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
    let testId = 1;

    this.props.getProduct(testId)
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
                return {productImages: product.urls};
              });
            });
          });
        });
      })
      .catch((error) => {
        console.log('Axios, error:', error);
      });
  }

  render() {
    return (
      <div className='product-card-container'>
        <h1>Red</h1>
      </div>
    );
  }
}

export default App;

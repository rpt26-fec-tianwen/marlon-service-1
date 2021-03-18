import axios from 'axios';

export const getProduct = (id) => {
  // comment out "path" in proxy
  // reference window.location.href instead
  const path = '/card/' + id;

  // use these in proxy
  // will guide your request
  const config = {
    params: {
      service: 'card',
      host: 'localhost',
      port: 8001,
      path: '/card/',
      productId: id
    }
  };

  return axios.get(path, config)
    .then((response) => {
      return response.data;
    });
};


export const getProductType = (id) => {
  // comment out "path" in proxy
  // reference window.location.href instead
  const path = '/productDetail/activity/' + id;

  // use these in proxy
  // will guide your request
  const config = {
    params: {
      service: 'details',
      host: 'localhost',
      port: 8003,
      path: '/',
      productId: id,
      indicator: 'activity'
    }
  };

  return axios.get(path, config)
    .then((response) => {
      return response.data;
    });
};


export const getProductReview = (id) => {
  // comment out "path" in proxy
  // reference window.location.href instead
  const path =  '/reviews-products/' + id;

  // use these in proxy
  // will guide your request
  const config = {
    params: {
      service: 'reviews',
      host: 'localhost',
      port: 8004,
      path: '/reviews-products/',
      productId: id
    }
  };

  return axios.get(path, config)
    .then((response) => {
      return response.data;
    });
}
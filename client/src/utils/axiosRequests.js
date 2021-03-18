import axios from 'axios';

export const getProduct = (id) => {
  let path = '/card/' + id;

  let config = {
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

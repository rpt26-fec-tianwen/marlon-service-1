import axios from 'axios';

export const getProduct = (id) => {
  let path = '/card/' + id;

  return axios.get(path)
    .then((response) => {
      return response.data;
    });
};

export const getProductType = (id) => {
  const path = '/productDetail/activity/' + id;

  return axios.get(path)
    .then((response) => {
      return response.data;
    });
};

import axios from 'axios';

export const getProduct = (id) => {
  let path = '/' + id;

  return axios.get(path)
    .then((response) => {
      return response.data;
    });
};

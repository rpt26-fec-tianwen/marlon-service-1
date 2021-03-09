import axios from 'axios';

export const getProduct = (id) => {
  let path = '/card/' + id;

  return axios.get(path)
    .then((response) => {
      return response.data;
    });
};

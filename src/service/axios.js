/* eslint-disable */
import axios from 'axios' // cookie话则需要设置withCrendentials
axios.defaults.baseURL = '/toolsapi'

const apiHandler = (data, options = {}) => {
  options = {
    timeout: 10000,
    withCredentials: true,
    ...options
  };

  if (options.method === 'get') {
    options.params = data;
  } else if (options.method === 'post') {
    options.data = data;
    options.headers = {
      ...options.headers,
      'Content-Type': 'application/json;charset=utf-8'
    };
  }
  return axios(options);
};

export const api = {
  get: (url, params, options = {}) => apiHandler(params, {
    method: 'get',
    url,
    ...options
  }),
  post: (url, postData, options = {}) => apiHandler(postData, {
    method: 'post',
    url,
    ...options
  })
}
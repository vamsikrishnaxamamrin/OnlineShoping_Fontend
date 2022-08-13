import axios from 'axios';

const baseURL = 'https://fakestoreapi.com';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const transformRequest = [
  (data) => {
    console.log(data);
    return data;
  },
];

const transformResponse = [
  (data) => {
    return JSON.parse(data);
  },
];

const httpsClient = axios.create({
  baseURL,
  headers,
  transformRequest,
  transformResponse,
});

const shopApi = (args) => {
  const { url, method = 'GET', data = {} } = args;

  const dataOrParams =
    method === 'GET' || method === 'DELETE' ? 'params' : 'data';

  return httpsClient.request({ method, url, [dataOrParams]: data });
};

export default shopApi;

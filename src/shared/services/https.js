import axios from 'axios';

const headers = {
  'content-type': 'application/json',
};

const httpsClient = axios.create({
  headers,
});

const https = (args) => {
  const { url, method = 'GET', data = {} } = args;
  const dataOrParams =
    method === 'GET' || method === 'DELETE' ? 'params' : 'data';
  return httpsClient.request({
    method,
    url,
    [dataOrParams]: data,
  });
};

export default https;

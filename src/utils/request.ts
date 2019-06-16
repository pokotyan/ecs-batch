import axios, { AxiosStatic, Method, AxiosError } from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded';

type args = [
  string, // url
  any?
];

interface ExtendAxios extends AxiosStatic {
  [key: string]: any;
}

const request = (method: Method) => async (...args: args) => {
  const res = await (axios as ExtendAxios)[method](...args).catch((err: AxiosError) => {
    console.log(`${err}`);

    return Promise.reject(err);
  });

  return res;
};

export const get = request('get');
export const post = request('post');
export const put = request('put');
export const del = request('delete');

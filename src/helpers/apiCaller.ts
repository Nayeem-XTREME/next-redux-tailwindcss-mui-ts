import axios from 'axios';

import { apiUrl } from '@/configs';

// Due to our current setup, supplying the request body through the Generics
// does not help us at all.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ObjectWithAnyProperty = Record<string, any>;

type ConfigArgs = {
  headers: {
    'Content-Type': string;
    Authorization?: string;
  };
};

const config: ConfigArgs = {
  headers: {
    'Content-Type': 'application/json',
  },
};

const Axios = axios.create({
  baseURL: apiUrl,
  timeout: 10000,
  ...config,
});

export const publicGet = async <T>(endpoint: string): Promise<T> => {
  const response = await Axios({
    method: 'get',
    url: endpoint,
  });
  return response.data;
};

export const publicPost = async <T>(
  endpoint: string,
  body: ObjectWithAnyProperty
): Promise<T> => {
  const response = await Axios({
    method: 'post',
    url: endpoint,
    data: body,
  });
  return response.data;
};

export const privateGet = async <T>(
  endpoint: string,
  token: string
): Promise<T> => {
  const response = await Axios({
    method: 'get',
    url: endpoint,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const privatePost = async <T>(
  endpoint: string,
  token: string,
  body: ObjectWithAnyProperty
): Promise<T> => {
  const response = await Axios({
    method: 'post',
    url: endpoint,
    data: body,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const privatePut = async <T>(
  endpoint: string,
  token: string,
  body: ObjectWithAnyProperty
): Promise<T> => {
  const response = await Axios({
    method: 'put',
    url: endpoint,
    data: body,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

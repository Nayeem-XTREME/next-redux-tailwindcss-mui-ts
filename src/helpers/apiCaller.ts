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

const fetchWithHeaders = async <T>(
  endpoint: string,
  method: string,
  body?: ObjectWithAnyProperty,
  token?: string,
  options?: RequestInit
): Promise<T> => {
  const headers = {
    ...config.headers,
    ...(token && { Authorization: `Bearer ${token}` }),
  };

  const mergedOptions: RequestInit = {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
    ...options,
  };

  const response = await fetch(`${apiUrl}/${endpoint}`, mergedOptions);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'An error occurred.');
  }

  return data;
};

export const publicGet = async <T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> => {
  return fetchWithHeaders<T>(endpoint, 'GET', undefined, undefined, options);
};

export const publicPost = async <T>(
  endpoint: string,
  body: ObjectWithAnyProperty,
  options?: RequestInit
): Promise<T> => {
  return fetchWithHeaders<T>(endpoint, 'POST', body, undefined, options);
};

export const privateGet = async <T>(
  endpoint: string,
  token: string,
  options?: RequestInit
): Promise<T> => {
  return fetchWithHeaders<T>(endpoint, 'GET', undefined, token, options);
};

export const privatePost = async <T>(
  endpoint: string,
  token: string,
  body: ObjectWithAnyProperty,
  options?: RequestInit
): Promise<T> => {
  return fetchWithHeaders<T>(endpoint, 'POST', body, token, options);
};

export const privatePut = async <T>(
  endpoint: string,
  token: string,
  body: ObjectWithAnyProperty,
  options?: RequestInit
): Promise<T> => {
  return fetchWithHeaders<T>(endpoint, 'PUT', body, token, options);
};

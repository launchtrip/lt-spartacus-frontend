import axios from 'axios';

export function axiosClientFactory() {
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_BASE_URL,
    // headers
  });
}
export const axiosClient = axiosClientFactory();

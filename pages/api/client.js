import axios from 'axios';

export function axiosClientFactory() {
  // 'Content-Type': 'application/x-www-form-urlencoded'
  const headers = {};
  return axios.create({
    baseURL: process.env.SERVER_BASE_URL,
    headers
  });
}
export const axiosClient = axiosClientFactory();

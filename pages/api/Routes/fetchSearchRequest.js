import { axiosClient } from '../client';

export default async function FetchSearchRequest(key) {
  const { data } = await axiosClient.get(`/events/search?key=${key}`);
  return data;
}

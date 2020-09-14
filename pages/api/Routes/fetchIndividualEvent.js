import { axiosClient } from '../client';

export default async function FetchIndividualEvent(id) {
  const url = `/events/${id}`;
  const { data } = await axiosClient.get(url);
  return data;
}

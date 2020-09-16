import { axiosClient } from '../../client';

export default async function FetchVirtualEventPageData() {
  const { data } = await axiosClient.get('/events/filter/virtual');
  return data;
}

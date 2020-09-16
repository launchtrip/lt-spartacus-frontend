import { axiosClient } from '../../client';

export default async function FetchHomePageData() {
  const { data } = await axiosClient.get('/events/main');
  return data;
}

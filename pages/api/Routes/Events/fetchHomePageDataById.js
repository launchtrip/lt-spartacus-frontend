import { axiosClient } from '../../client';

export default async function FetchHomePageDataById(id) {
  const url = `/events/main?industry=${id}`;
  const { data } = await axiosClient.get(url);
  return data;
}

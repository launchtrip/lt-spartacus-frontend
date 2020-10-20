import { axiosClient } from '../../client';

export default async function FetchVirtualPageDataById(id) {
  const url = `/events/filter/virtual?industry=${id}`;
  const { data } = await axiosClient.get(url);
  return data;
}

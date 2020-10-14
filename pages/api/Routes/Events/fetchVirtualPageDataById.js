import { axiosClient } from '../../client';

export default async function FetchVirtualPageDataById(id) {
  const url = `/events/filter/virtual?industry=${id}`;
  console.log(url);
  const { data } = await axiosClient.get(url);
  return data;
}

import { axiosClient } from '../../client';

export default async function BecomeASponsor(data) {
  const response = await axiosClient.post('/sponsors', data);
  return response;
}

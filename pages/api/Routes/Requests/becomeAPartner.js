import { axiosClient } from '../../client';

export default async function BecomeAPartner(data) {
  const response = await axiosClient.post('/partnerships', data);
  return response;
}

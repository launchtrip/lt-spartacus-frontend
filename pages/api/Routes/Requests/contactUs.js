import { axiosClient } from '../../client';

export default async function ContactUs(data) {
  const response = await axiosClient.post('/contactuses', data);
  return response;
}

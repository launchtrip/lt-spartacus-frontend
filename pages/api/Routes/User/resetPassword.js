import { axiosClient } from '../../client';

export default async function ResetPassword(data) {
  const response = await axiosClient.post('events/resetpassword', data);
  return response;
}

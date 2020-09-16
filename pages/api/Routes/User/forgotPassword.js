import { axiosClient } from '../../client';

export default async function ForgotPassword(data) {
  const response = await axiosClient.post('auth/forgot-password', data);
  return response;
}

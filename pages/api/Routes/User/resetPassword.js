import { axiosClient } from '../../client';

export default async function ResetPassword(data, bearer) {
  const config = {
    headers: {
      Authorization: bearer
    }
  };
  const response = await axiosClient.post('events/resetpassword', data, config);
  return response;
}

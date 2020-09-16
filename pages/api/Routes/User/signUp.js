import { axiosClient } from '../../client';

export default async function SignUp(data) {
  const response = await axiosClient.post('/events/signup', data);
  return response;
}

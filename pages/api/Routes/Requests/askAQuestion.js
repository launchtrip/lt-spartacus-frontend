import { axiosClient } from '../../client';

export default async function AskAQuestion(data) {
  const response = await axiosClient.post('/questions', data);
  return response;
}

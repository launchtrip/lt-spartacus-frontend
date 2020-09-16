import { axiosClient } from '../../client';

export default async function RequestDiscountTickets(data) {
  const response = await axiosClient.post('/tickets', data);
  return response;
}

import { axiosClient } from '../../client';

export default async function FetchIndividualArticle(id) {
  const url = `/articles/${id}`;
  const { data } = await axiosClient.get(url);
  return data;
}

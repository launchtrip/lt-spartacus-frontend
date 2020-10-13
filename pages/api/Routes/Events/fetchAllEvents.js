import * as queryStringUtil from 'query-string';
import { axiosClient } from '../../client';

export default async function FetchAllEvents(values) {
  const queryString = queryStringUtil.stringify(values);
  const url = `/events/filter/all?${queryString}`;
  console.log(url);
  const { data } = await axiosClient.get(url);
  return data;
}

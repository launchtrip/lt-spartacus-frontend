import * as queryStringUtil from 'query-string';
import { axiosClient } from '../client';

export default async function FetchAllEvents(values) {
  const queryString = queryStringUtil.stringify({
    dateStart: values.dateStart,
    dateEnd: values.dateEnd
  });
  const url = `/events/filter/all?${queryString}`;
  const { data } = await axiosClient.get(url);
  return data;
}

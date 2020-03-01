import Axios from 'axios';

export const GET = (
      URL,
      data,
      headers
) =>
      Axios.get(URL, data, headers);


export const POST = (
      URL,
      data,
      headers
) =>
      Axios.post(URL, data, headers);
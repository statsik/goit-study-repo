import axios, { AxiosResponse } from 'axios';

async function fetchData<T>(url:string): Promise<T> {
  try {
    const response: AxiosResponse<T> = await axios.get<T>(url);
    return response.data;
  } catch (error: unknown) {
    throw new Error(`Error fetching from ${url}: ${String(error)}`);
  }
}

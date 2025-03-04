import AxiosInstance = Axios.AxiosInstance;
import axios from "axios";

const API_URL: string = process.env.REACT_APP_API_URL as string;

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 5_000,
});
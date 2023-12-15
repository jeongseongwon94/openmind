import axios from 'axios';

export const axiosBaseURL = axios.create({
  baseURL: 'https://openmind-api.vercel.app/2-10/',
});

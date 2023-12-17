import axios from 'axios';

const axiosBaseURL = axios.create({
  baseURL: 'https://openmind-api.vercel.app/2-10/',
});

export default axiosBaseURL;

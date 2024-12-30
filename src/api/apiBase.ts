import axios from 'axios';

const apiBase = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL as string,
});

export default apiBase

import axios from 'axios';
import { baseURL } from '@utils/constants/urls.ts';

const api = axios.create({ baseURL, withCredentials: true });

export { api };

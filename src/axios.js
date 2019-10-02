import axios from 'axios';
import config from './env.local.json';

const instance = axios.create({
    baseURL: config.firebaseConfig.databaseURL
});

export default instance;
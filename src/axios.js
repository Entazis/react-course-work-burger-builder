import axios from 'axios';
import config from './env.local.json';

const instance = axios.create({
    baseURL: config.database.FIREBASE
});

export default instance;
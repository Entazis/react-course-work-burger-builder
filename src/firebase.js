import firebase from 'firebase';
import config from './env.local.json';

const app = firebase.initializeApp({
    apiKey: config.FIREBASE.apiKey,
    databaseURL: config.FIREBASE.database,
});

export default app;
import firebase from 'firebase';
import config from './env.local.json';

const app = firebase.initializeApp(config.firebaseConfig);

export default app;
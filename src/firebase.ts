import firebase from 'firebase/app';
// eslint-disable-next-line import/no-duplicates
import 'firebase/firestore';
// eslint-disable-next-line import/no-duplicates
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDXLdu0KK1SkhXrXj7sQDY6RLPiQFyhJMY',
  authDomain: 'elenaremizova-42431.firebaseapp.com',
  databaseURL: 'https://elenaremizova-42431.firebaseio.com',
  projectId: 'elenaremizova-42431',
  storageBucket: 'elenaremizova-42431.appspot.com',
  messagingSenderId: '329797414408',
  appId: '1:329797414408:web:88eae4357a3b23bfe66bbd',
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

if (process.env.NODE_ENV !== 'production') {
  window.firebase = firebase;
}

export default firebase;

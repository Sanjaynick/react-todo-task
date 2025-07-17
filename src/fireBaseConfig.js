import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCreNwV4mdW8G7RJ3ejW92LYIWkNWgEC0w",
  authDomain: "todo-list-39927.firebaseapp.com",
  projectId: "todo-list-39927",
  storageBucket: "todo-list-39927.firebasestorage.app",
  messagingSenderId: "550487656788",
  appId: "1:550487656788:web:0568216c071996f02f20c1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
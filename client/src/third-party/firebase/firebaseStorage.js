// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOQ3f11eQA7rQRjVSbhGGmJzuBsoU7WH4",
  authDomain: "event-management-1507.firebaseapp.com",
  projectId: "event-management-1507",
  storageBucket: "event-management-1507.appspot.com",
  messagingSenderId: "554946398363",
  appId: "1:554946398363:web:be418437ec8de1e44b5e3e",
  measurementId: "G-HZJFWK8L7Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const event_storage = getStorage(app, "gs://event-management-1507.appspot.com");
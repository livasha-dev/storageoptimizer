import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAos5b6TU8B_Amb695KLAj4aXFf0zXGVKk",
  authDomain: "smartcloud-storage-optimizer.firebaseapp.com",
  projectId: "smartcloud-storage-optimizer",
  storageBucket: "smartcloud-storage-optimizer.firebasestorage.app",
  messagingSenderId: "906747255919",
  appId: "1:906747255919:web:328af1f1f69eb55e79c19a",
  measurementId: "G-0895WPG3ZM"
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export { storage };
// apiKey: "AIzaSyC01RwulGEWHCDHXrfE2tCsUNhlGU_Jyvk",
// authDomain: "pocfirebase-8d2a2.firebaseapp.com",
// projectId: "pocfirebase-8d2a2",
// storageBucket: "pocfirebase-8d2a2.appspot.com",
// messagingSenderId: "978582583233",
// appId: "1:978582583233:web:26e7fa94ad1072e22f2140",
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// Initialize Firebase
const app = initializeApp({
  apiKey: "AIzaSyC01RwulGEWHCDHXrfE2tCsUNhlGU_Jyvk",
  authDomain: "pocfirebase-8d2a2.firebaseapp.com",
  projectId: "pocfirebase-8d2a2",
  storageBucket: "pocfirebase-8d2a2.appspot.com",
  messagingSenderId: "978582583233",
  appId: "1:978582583233:web:26e7fa94ad1072e22f2140",
});
// Firebase storage reference
const storage = getStorage(app);
export default storage;

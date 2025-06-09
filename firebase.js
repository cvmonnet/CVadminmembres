
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-app.js";
import { getDatabase, ref, set, push, get, child } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDgNJhpLCW3GvJAlG8KAQwFJnVpLAB0dhM",
  authDomain: "cvadmin-731f2.firebaseapp.com",
  databaseURL: "https://cvadmin-731f2-default-rtdb.firebaseio.com",
  projectId: "cvadmin-731f2",
  storageBucket: "cvadmin-731f2.appspot.com",
  messagingSenderId: "525304173372",
  appId: "1:525304173372:web:53bd904b1d431a0439",
  measurementId: "G-J6KD6KZPFZ"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, set, push, get, child };

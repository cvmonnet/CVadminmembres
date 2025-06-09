<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDgNJhpLCW3GvJAlG8KAQwFJnVpLAB0dhM",
    authDomain: "cvadmin-731f2.firebaseapp.com",
    databaseURL: "https://cvadmin-731f2-default-rtdb.firebaseio.com",
    projectId: "cvadmin-731f2",
    storageBucket: "cvadmin-731f2.firebasestorage.app",
    messagingSenderId: "525304173372",
    appId: "1:525304173372:web:6b6c3d54cb2b77a21a0439",
    measurementId: "G-GHR0NLM0K5"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>

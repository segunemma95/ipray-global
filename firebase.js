<!-- firebase.js -->
<script type="module">
  // Import Firebase SDK
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
  import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";

  // Your Firebase config
  const firebaseConfig = {
    apiKey: "AIzaSyDyzpL55SSiDRcPt6Hm8IK07k79a11bmDI",
    authDomain: "ipray-global.firebaseapp.com",
    projectId: "ipray-global",
    storageBucket: "ipray-global.firebasestorage.app",
    messagingSenderId: "762667869397",
    appId: "1:762667869397:web:dca75780999748ef7e2e5c"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  // Make available to other scripts
  window.db = db;
  window.addDoc = addDoc;
  window.collection = collection;
</script>


  // Expose db globally so main.js can access it
  window.db = db;
  window.addFirestore = addDoc;
  window.fireCollection = collection;
</script>

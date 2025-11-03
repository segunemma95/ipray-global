<!-- Firebase SDK -->
<script type="module">
  // Import Firebase
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
  import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

  // Your Firebase project config
  const firebaseConfig = {
    apiKey: "YOUR-API-KEY",
    authDomain: "YOUR-DOMAIN",
    projectId: "YOUR-PROJECT-ID",
    storageBucket: "YOUR-BUCKET",
    messagingSenderId: "YOUR-SENDER",
    appId: "YOUR-APP-ID"
  };

  // Initialize
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  // Expose db globally so main.js can access it
  window.db = db;
  window.addFirestore = addDoc;
  window.fireCollection = collection;
</script>

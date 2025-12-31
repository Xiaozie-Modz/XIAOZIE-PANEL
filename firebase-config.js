// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyACkF_txV9hY4U4wFpTTAQvxVXvaE7FE9U",
  authDomain: "admin-panel-xiaozie.firebaseapp.com",
  databaseURL: "https://admin-panel-xiaozie-default-rtdb.firebaseio.com",
  projectId: "admin-panel-xiaozie",
  storageBucket: "admin-panel-xiaozie.firebasestorage.app",
  messagingSenderId: "980970400432",
  appId: "1:980970400432:web:e53d2cb137e82c32136975",
  measurementId: "G-GHVG1QL3W3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Export the initialized services
export { app, analytics, db };
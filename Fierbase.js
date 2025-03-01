// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyDLwjxhNrBX6-a3Zpc9VCNg_DZLcT9ZVNI",
    authDomain: "safety-1f2c3.firebaseapp.com",
    projectId: "safety-1f2c3",
    storageBucket: "safety-1f2c3.appspot.com",
    messagingSenderId: "585981685456",
    appId: "1:585981685456:web:75e7af73862b75eb6438d5"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const messaging = firebase.messaging();

// Function to send WhatsApp message
function sendWhatsAppMessage(phoneNumber, message) {
    console.log("hey" ,phoneNumber)
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

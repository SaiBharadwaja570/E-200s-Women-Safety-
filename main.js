import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth,GoogleAuthProvider,signInWithPopup } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
 
  const firebaseConfig = {
    apiKey: "AIzaSyDLwjxhNrBX6-a3Zpc9VCNg_DZLcT9ZVNI",
    authDomain: "safety-1f2c3.firebaseapp.com",
    projectId: "safety-1f2c3",
    storageBucket: "safety-1f2c3.firebasestorage.app",
    messagingSenderId: "585981685456",
    appId: "1:585981685456:web:a14ac6fb1585364a6438d5"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  auth.languageCode = 'en';
  const provider = new GoogleAuthProvider();
  const googlelogin = document.getElementById("google-login-btn");
  googlelogin.addEventListener('click',function(){
    signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    console.log(user)
    window.location.href="logged.html";
  
  }).catch((error) => {
   const errorCode = error.code;
    const errorMessage = error.message;


  });

  })
  const sub = document.getElementById("submit");
  sub.addEventListener('click',function(){
    window.location.href="logged.html"
  })
  const sub2 = document.getElementById("login");
  sub2.addEventListener('click',function(){
    window.location.href="logged.html"
  })
 
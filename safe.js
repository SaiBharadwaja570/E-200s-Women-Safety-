  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
 import { getAuth,GoogleAuthProvider,signInWithPopup} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyAWNsrcHBB3gB2bNoRgF9HRforN1Q7eqF0",
    authDomain: "testing-ffc1e.firebaseapp.com",
    projectId: "testing-ffc1e",
    storageBucket: "testing-ffc1e.firebasestorage.app",
    messagingSenderId: "540401835256",
    appId: "1:540401835256:web:b93aa1b348d602c390af0d"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  auth.languageCode ='en';
  const provider =new GoogleAuthProvider();
  const googlelogin = document.getElementById("google-login-btn");
  googlelogin.addEventListener('click',function(){
    signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      console.log(user);
      window.location.href="logged.html"
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
     
    });
  
  })
const login = document.getElementById("btn");
login.addEventListener('click',function(){
    window.location.href="signup.html"
})

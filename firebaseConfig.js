/* // Import the functions you need from the SDKs you need
import * as firebase from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfl4LHG75EcoHXsPmCb-nvs-KMBtHLw24",
  authDomain: "s7-exam-mobile.firebaseapp.com",
  projectId: "s7-exam-mobile",
  storageBucket: "s7-exam-mobile.appspot.com",
  messagingSenderId: "262660907853",
  appId: "1:262660907853:web:6fc6cb92c48dce57760d04"
};

// Initialize Firebase
let app 
if ( firebase == 0) {
  app = firebase.initializeApp(firebaseConfig); 
}else{
  app = firebase.getApp();
}
export const auth = getAuth(app);
// Import the functions you need from the SDKs you need
 */
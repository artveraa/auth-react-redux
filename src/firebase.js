import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
        apiKey: "AIzaSyAevsCAr577zNFdEO2r3NVqqENq-DQoVHQ",
        authDomain: "auth-react-exercise.firebaseapp.com",
        projectId: "auth-react-exercise",
        storageBucket: "auth-react-exercise.appspot.com",
        messagingSenderId: "816094831114",
        appId: "1:816094831114:web:7c93eb774969be95d5b5f3"
})

export const auth = app.auth();
export default app;
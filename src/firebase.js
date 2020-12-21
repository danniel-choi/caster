import app from "firebase/app";
import "firebase/firestore";
import 'firebase/auth';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyDak0Cpaa7WNNZDuI1y0meIpvJlWZ1gf2k",
    authDomain: "caster-586d1.firebaseapp.com",
    projectId: "caster-586d1",
    storageBucket: "caster-586d1.appspot.com",
    messagingSenderId: "738388059049",
    appId: "1:738388059049:web:0991600ef46098f1ccdab8",
    measurementId: "G-73V6MG1BSP"
};

class Firebase{
    constructor(){
        app.initializeApp(config);
        this.firestore = app.firestore();
        this.auth = app.auth();
        // this.auth.signInWithEmailAndPassword
    }
    doSignInWithEmailAndPassword(email,password){
        return this.auth.signInWithEmailAndPassword(email,password)
    }
}
export default new Firebase();
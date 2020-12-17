import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDak0Cpaa7WNNZDuI1y0meIpvJlWZ1gf2k",
    authDomain: "caster-586d1.firebaseapp.com",
    projectId: "caster-586d1",
    storageBucket: "caster-586d1.appspot.com",
    messagingSenderId: "738388059049",
    appId: "1:738388059049:web:0991600ef46098f1ccdab8",
    measurementId: "G-73V6MG1BSP"
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };
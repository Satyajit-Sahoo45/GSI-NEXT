import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//     apiKey: "AIzaSyCS1H8GgHeXxprx2yro5dIxFA0O_0wyl70",
//     authDomain: "loginsignupgsi.firebaseapp.com",
//     projectId: "loginsignupgsi",
//     storageBucket: "loginsignupgsi.appspot.com",
//     messagingSenderId: "70847031831",
//     appId: "1:70847031831:web:163cb409e13163040a0a52"
// };

const firebaseConfig = {
    apiKey: "AIzaSyBPZomDcmoh-OCV-wTAGDJlAll49iONBu4",
    authDomain: "reviewrating-27cff.firebaseapp.com",
    projectId: "reviewrating-27cff",
};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
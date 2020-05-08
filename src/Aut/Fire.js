import * as firebase from "firebase";

const Config = {
    apiKey: "AIzaSyBG-7lZBfLIZeTMO_h_h2_LxJzyQfrG4d0",
    authDomain: "react-site-169fb.firebaseapp.com",
    databaseURL: "https://react-site-169fb.firebaseio.com",
    projectId: "react-site-169fb",
    storageBucket: "react-site-169fb.appspot.com",
    messagingSenderId: "986276840455",
    appId: "1:986276840455:web:b8492286436f52366916a2",
    measurementId: "G-YV70XWLT7J"
};

const fire = firebase.initializeApp(Config);
export default fire;

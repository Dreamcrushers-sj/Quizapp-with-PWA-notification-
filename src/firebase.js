import firebase from "firebase";

const config = {
    apiKey: "AIzaSyCQuC3BZFOdfoL3AyRaVMShs7QLbfEf6Lc",
        authDomain: "quizapp-notification.firebaseapp.com",
        databaseURL: "https://quizapp-notification.firebaseio.com",
        projectId: "quizapp-notification",
        storageBucket: "quizapp-notification.appspot.com",
        messagingSenderId: "944812035978",
        appId: "1:944812035978:web:9554c52eaac3bf3ce28273",
        measurementId: "G-K9TXC5JJHQ"
}

firebase.initializeApp(config);

export default firebase;
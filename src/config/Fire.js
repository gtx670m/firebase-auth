import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyBemvOITkOVhoyM7_4HQvksQn0QilD3hZ8",
    authDomain: "task-reminder-ea447.firebaseapp.com",
    databaseURL: "https://task-reminder-ea447.firebaseio.com",
    projectId: "task-reminder-ea447",
    storageBucket: "task-reminder-ea447.appspot.com",
    messagingSenderId: "381389804670"
};
const fire = firebase.initializeApp(config);
export default fire;
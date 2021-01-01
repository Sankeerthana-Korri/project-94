
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDwgSLI5Qn0PzDM7bWMi7yiF3_LuA_XtrM",
    authDomain: "p-94-f6007.firebaseapp.com",
    databaseURL: "https://p-94-f6007-default-rtdb.firebaseio.com",
    projectId: "p-94-f6007",
    storageBucket: "p-94-f6007.appspot.com",
    messagingSenderId: "425387466504",
    appId: "1:425387466504:web:b994ca2585b75c311d56bd"
  };

function addUser(){
    user_name = document.getElementById("user_name").value;  
    firebase.databse().ref("/").child(user_name).update({
        purpose: "adding user"
    });
}
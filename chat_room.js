var firebaseConfig = {
    apiKey: "AIzaSyB3vq0a5cILieDd5Rlm1YfbyhJYPVgZOKU",
    authDomain: "lets-chat-bb469.firebaseapp.com",
    databaseURL: "https://lets-chat-bb469-default-rtdb.firebaseio.com",
    projectId: "lets-chat-bb469",
    storageBucket: "lets-chat-bb469.appspot.com",
    messagingSenderId: "529077057160",
    appId: "1:529077057160:web:13b9eb2ea354c0033cd13d"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      });});}
getData();

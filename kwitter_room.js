const firebaseConfig = {
      apiKey: "AIzaSyAKJViHuziWLFtN3NnJF43PGnbP3ERr6HI",
      authDomain: "kwitterproject-df758.firebaseapp.com",
      databaseURL: "https://kwitterproject-df758-default-rtdb.firebaseio.com",
      projectId: "kwitterproject-df758",
      storageBucket: "kwitterproject-df758.appspot.com",
      messagingSenderId: "964934279215",
      appId: "1:964934279215:web:ad4cf52499fbcd08c6e6da"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
// Initialize Firebase
const app = initializeApp(firebaseConfig);

user_name = localStorage.getItem("username");
document.getElementById("user_name").innerHTML = "welcome "+user_name+"!";

function add_room(){
      room_name = document.getElementById("room_name").value;
    localStorage.setItem("roomname",room_name);
    window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

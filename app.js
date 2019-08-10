// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAxfN7NqTsQpNF9H_o3MFU6RERarbF4KM0",
    authDomain: "train-scheduler-836ae.firebaseapp.com",
    databaseURL: "https://train-scheduler-836ae.firebaseio.com",
    projectId: "train-scheduler-836ae",
    storageBucket: "",
    messagingSenderId: "450162581972",
    appId: "1:450162581972:web:9c6532086c05fbb4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

console.log(database)
$("#add-train-btn").on("click", function(event) {
    event.preventDefault();

    var trName = $("#train-name-input").val().trim();
    var trDest = $("#destination-input").val().trim();
    var trTime = $("#first-input").val().trim();
    var trRate = $("#rate-input").val().trim();

    var newTrain = {
        Name: trName,
        Dest: trDest,
        Time: trTime,
        Rate: trRate
    };

    database.ref().push(newTrain);

    console.log(newTrain.Name);
    console.log(newTrain.Dest);
    console.log(newTrain.Time);
    console.log(newTrain.Rate);

    alert("Train successfully added");

    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#first-input").val("");
    $("rate-input").val("");
});

database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());

    var trName = childSnapshot.val().Name;
    var trDest = childSnapshot.val().Dest;
    var trTime = childSnapshot.val().Time;
    var trRate = childSnapshot.val().Rate;

    console.log(trName);
    console.log(trRole);
    console.log(trStart);
    console.log(trRate);
  
})
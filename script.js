//Exercise 1
var number = Number(prompt("Enter a Number!"));

var output = 0;
var i = 0;
for (i = 0; i <= number; i++){
  output += i;
}
console.log(output);

//Exercise 2
var play = prompt("Do you want to play?");

var Responselog = "";

do{
  var Response = prompt("Enter a word");
  Responselog = Responselog + " " + Response;
  var play = prompt("Do you want to play again?");
} while (play == "yes");

console.log(Responselog);

//Exercise 3
var Print = prompt("Would you like to print your name?");
var namelog = "";

if (Print == "yes") {
  var name = prompt("What is your name?");
  var namelog = "Hello. My name is " + name;
}
console.log(namelog);

while (Print == "yes"){
  namelog = namelog + "!";
  Print = prompt("Would you like to print your name?");
  console.log(namelog);
}

//Exercise 4
var time = prompt("What time of day is it?");

if (time == "morning"){
  console.log("Since it is morning you should be eating breakfast. We suggest eggs and toast.")
} if else (time == "noon"){
  console.log("Since it is daytime you should be eating lunch. We suggest a salad.")
} if else (time == "evening"){
  console.log("Since it is evening you should be eating dinner. We suggest eating chicken and rice.")
}

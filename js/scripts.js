/*var die1 = Math.floor(Math.random()*6 +1);
var die2 = Math.floor(Math.random()*6 +1);
var score = "";

var d1 = Math.floor(Math.random()*6 +1);
var d2 = Math.floor(Math.random()*6 +1);
var score = "";

if (die1 === 1 || die2 === 1) {
    score = 0;
  } else {
    score = (die1 + die2);
  }
  if(die1 === die2){
    score = 2*(die1 + die2);
} else {
  score = (die1 + die2)
}

$(document).ready(function () {
    $("#die1").click(function (event) {
        event.preventDefault();

function rollDice() {

    var die1 = document.getElementById("die1");
    var die2 = document.getElementById("die2");
    var status = document.getElementById("status");
    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    var diceTotal = d1 + d2;
    die1.innerHTML = d1;
    die2.innerHTML = d2;
    status.innerHTML = "You rolled "+diceTotal+".";
    if(d1 == d2){
        status.innerHTML += " DOUBLES! You get a free turn!!";
 }
}*/

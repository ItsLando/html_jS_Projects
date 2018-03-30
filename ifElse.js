alert("HELLO")

var secretNumber = 4;
var guess = prompt("Guess a number!");

if (guess == secretNumber){
  alert("You guessed it right!");
}
 else if (guess < secretNumber){
   alert("Too low!");
 }

else {
  alert("Too high!")
}

var userFirstName = prompt("Hello there! What's your first name?");
var userLastName = prompt("...your last name?");
var userAge = prompt("and finally, how old are you?");

var userDays = userAge * 365.25;

console.log("Okay, so your first and last name respectively, is " + userFirstName + " " + userLastName);
console.log("and you're " + userAge + " years old? Great!");

console.log("Oh and by the way, you've been alive for roughly " + userDays + " days! Isn't that interesting? Time sure does fly!");

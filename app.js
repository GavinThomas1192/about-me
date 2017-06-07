'use strict';
//Do they want to play?
var askQuestion = confirm("Hello, I'm Gavin. Want to play a guessing game?");
if (askQuestion === true) {
  alert("Great! I'm Gavin here are some questions to guess!");
  var gender = prompt("Since you already know my name, do you think I am a boy or girl?");

  if (gender.toLowerCase() === "boy") {
    alert("Great guess! I am a boy!");
  } else {
    alert("Wrong guess!");

  }
  var age = prompt("Now you know my name is Gavin and I'm a boy. Do you think I am less than 20 years old?");
  if (age.toLowerCase() == "no") {
    alert("Wow, you're on top of it! I am older than 20.");
  } else {
    alert("Whoops wrong!");
  }
  var exactAge = prompt("Now that you know I'm older than 20. I want you to guess my exact age. It's a number between 23 and 25");
  if (exactAge == 24) {
    alert("Man, you might as well go buy some lotto tickets, you're on fire!");
  } else {
    alert("How in the world did you get that wrong?");
 }
  var myKids = prompt("I'm glad you are getting to know me. How many children do you think I have?");
  if (myKids === "1") {
    alert("I do have one child, and he is amazing.");
  } else {
    alert("Error, you guessed wrong!");
  }
  var currentCity = prompt("Last question, what city do I live in? (Tacoma, Seattle, Sumner, or Bellevue)");
  if (currentCity === "Tacoma") {
    alert("Wow you nailed it again! Now go buy me some lottery tickets!");
  } else {
    alert("Wrong");
  }
} else {
  alert("Okay, play again soon!");
}

console.log("The user responded with " + gender + " when asked my gender");
console.log("The user responded with " + age + " when asked if they thought I and less than 20 years old.");
console.log("The user responded with " + exactAge + " when asked to pick a number between 23 & 25.");
console.log("The user responded with " + myKids + " when asked if I had kids. ");
console.log("The user responded with " + currentCity + " when asked where I live.");

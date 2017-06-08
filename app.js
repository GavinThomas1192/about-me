'use strict';
//var for total answers correct
var totalAnswerCorrect = 0;
//Do they want to play?
var askQuestion = confirm('Hello, I\'m Gavin. Want to play a guessing game?');
if (askQuestion === true) {
  alert('Great! I\'m Gavin here are some questions to guess!');
  //Question 1
  var gender = prompt('Since you already know my name, do you think I am a boy or girl?');
  if (gender.toLowerCase() === 'boy') {
    alert('Great guess! I am a boy!');
    totalAnswerCorrect++;
  } else {
    alert('Wrong guess!');

  }
  //Question 2
  var age = prompt('Now you know my name is Gavin and I\'m a boy. Do you think I am less than 20 years old?');
  if (age.toLowerCase() == 'no' || age.toLowerCase() == 'n') {
    alert('Wow, you\'re on top of it! I am older than 20.');
    totalAnswerCorrect++;
  } else {
    alert('Whoops wrong!');
  }
  //Question 3
  var exactAge = prompt('Now that you know I\'m older than 20. I want you to guess my exact age. It\'s a number between 23 25.');
  if (exactAge === '24') {
    alert('Man, you might as well go buy some lotto tickets, you\'re on fire!');
    totalAnswerCorrect++;
  } else {
    alert('How in the world did you get that wrong?');
  }
  //Question 4
  var myKids = prompt('I\'m glad you are getting to know me. How many children do you think I have?');
  if (myKids === '1') {
    alert('I do have one child, and he is amazing.');
    totalAnswerCorrect++;
  } else {
    alert('Error, you guessed wrong!');
  }
  //Question 5
  var favoriteState = prompt('Which is my favorite state? (Washington, Oregon, Montanna, or California)');
  if (favoriteState.toLowerCase() === 'montanna') {
    alert('Wow you nailed it again! Now go buy me some lottery tickets!');
    totalAnswerCorrect++;
  } else {
    alert('Wrong');
  }
  //random number question 6 !!!!Help
  var totalTries = 4;
  var randomNumber = Math.floor(Math.random() * 10 + 1);
  console.log(randomNumber);
  while (totalTries > 0) {
    var randomNumberAns = prompt('I\'m thinking of a random whole number between 1 and 10. Can you guess it with only 4 tries?');
    if (randomNumberAns == randomNumber) {
      alert('Wow! You guessed it!');
      totalTries = 0;
      totalAnswerCorrect++;
    } else {
      alert('Oh no! Guess again!');
      totalTries--;
    }
  }
  //question number 7-Mult correct anwsers
  var questionSevenTries = 6;
  var citiesLived = ['lakewood', 'tacoma', 'steilacoom', 'auburn', 'Seattle', 'des moines', 'sea-tac'];
  var isRight = false;
  while (questionSevenTries > 0) {
    var whichCity = prompt('I have lived in three out of these seven cities. Can you guess at least one? (Tacoma, Lakewood, Steilacoom, Auburn, Seattle, Des Moines, Sea-Tac,)');

    for (var i = 0; i < citiesLived.length; i++) {
      if (citiesLived[i] == whichCity.toLowerCase()) {
        alert('You guessed right!');
        questionSevenTries = 0;
        isRight = true;
        totalAnswerCorrect++;
      }
    }
    if (isRight === false) {
      alert('wrong');
      questionSevenTries--;
    }
  }

} else {
  alert('Okay, play again soon!');
}
alert('Congratulations! You got ' + totalAnswerCorrect + ' questions correct!');
console.log('The user got ' + totalAnswerCorrect + ' questions correct.');
console.log('The user responded with ' + gender + ' when asked my gender');
console.log('The user responded with ' + age + ' when asked if they thought I and less than 20 years old.');
console.log('The user responded with ' + exactAge + ' when asked to pick a number between 23 & 25.');
console.log('The user responded with ' + myKids + ' when asked if I had kids. ');
console.log('The user responded with ' + favoriteState + ' when asked where I live.');
console.log('The user repsonded with ' + randomNumberAns + 'until guessing the correct number or running out of guesses.');
console.log('the user responded with ' + whichCity + ' unil guessing a correct city or running out of attempts.');

'use strict';
//@@ Selecting and Manipulating Elements
// console.log(document.querySelector('.message').textContent); //Start guessing...
// document.querySelector('.message').textContent = 'Correct number!';
// console.log(document.querySelector('.message').textContent); //Correct number!
//* random number
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
//* input number
// console.log(document.querySelector('.guess').value); //empty
// document.querySelector('.guess').value = 23;

//@@ Handling Click Events
//* event reaction
let secretNumber = Math.trunc(Math.random() * 10) + 1;
console.log(`Random number is ${secretNumber} , type ${typeof secretNumber}`);

let score = 10;
let highScore = 0;

const displayMessage = function (massage) {
  document.querySelector('.message').textContent = massage;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess); //input 5 and click check //5 "number"

  //@@ Implementing the Game Logic
  //*When there is empty
  if (!guess) {
    //document.querySelector('.message').textContent = '🤬 No number!';
    displayMessage('🤬 No number!');
  }
  //* When there is no input < 0
  else if (guess < 0) {
    //document.querySelector('.message').textContent = '📉 Number to low than 1';
    displayMessage('📉 Number to low than 1');
  }
  //* When there is no input > 10
  else if (guess > 10) {
    //document.querySelector('.message').textContent = '📈 Number to high than 10';
    displayMessage('📈 Number to high than 10');
  }
  //* when player wins
  else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = '🎉 Correct number!';
    displayMessage('🎉 Correct number!');
    //@@ Manipulating CSS Styles
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.backgroundColor = '#2fff39';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').style.color = '#ffffff';
    //@@ Implementing Highscores
    //* keep high score
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //@@ Refactoring Our Code: The DRY Principle
  //* when guess is to wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      //document.querySelector('.message').textContent = guess > secretNumber ? '🔺 Too high!' : '🔻 Too low!';
      displayMessage(guess > secretNumber ? '🔺 Too high!' : '🔻 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = '😭 You lost the game!';
      displayMessage('😭 You lost the game!');
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.number').style.backgroundColor = '#ff0000';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').style.color = '#ffffff';
    }
  }
  //* when guess is to high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '🔺 Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😭 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('.number').textContent = secretNumber;
  //     document.querySelector('.number').style.backgroundColor = '#ff0000';
  //     document.querySelector('.number').style.width = '30rem';
  //     document.querySelector('.number').style.color = '#ffffff';
  //   }
  // }
  //* when guess is to low
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '🔻 Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😭 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('.number').textContent = secretNumber;
  //     document.querySelector('.number').style.backgroundColor = '#ff0000';
  //     document.querySelector('.number').style.width = '30rem';
  //     document.querySelector('.number').style.color = '#ffffff';
  //   }
  // }
});
/**
 * * Coding Challenge #1
 * ? Implement a game rest functionality, so that the player can make a new guess!
 * TODO Your tasks:
 * todo 1. Select the element with the 'again' class and attach a click event handler
 * todo 2. In the handler function, restore initial values of the 'score' and 'secretNumber' variables
 * todo 3. Restore the initial conditions of the message, number, score and guess input fields
 * todo 4. Also restore the original background color (#222) and number width (15rem)
 **/
//todo 1
document.querySelector('.again').addEventListener('click', function () {
  //todo 2
  score = 10;
  secretNumber = Math.trunc(Math.random() * 10) + 1;
  console.log(
    `Random number again is ${secretNumber} , type ${typeof secretNumber}`
  );
  //todo 3
  //document.querySelector('.number').textContent = '?';
  displayMessage('?');
  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  //todo 4
  document.querySelector('.number').style.backgroundColor = '#eeeeee';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').style.color = '#333333';
});

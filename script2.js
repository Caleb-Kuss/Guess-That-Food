`use strict`;

let foodChoices = [
  'Pizza',
  'Cheese Burger',
  'Nachos',
  'Tacos',
  'Fish',
  'Hot Dogs',
  'Corn Dogs',
  'Chicken',
  'Ramen',
];
let wrongChoices = [
  `Nope. Try Again`,
  `Wrong. Try Once More!`,
  `Incorrect. Don't Give Up`,
  `Nope, Keep On Trying`,
];
//code for game to work
let food = getRandom(foodChoices);
let choices = getRandom(wrongChoices);
let score = 7;
let highscores = 0;
let lifeTimeAttempts = 0;
const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

const highScoreNumber = function (highScore) {
  document.querySelector(`.highScoreNumber`).textContent = highScore;
};

const documentBody = document.querySelector(`body`);
const submitBtn = document.querySelector(`.submit`);
const inputBox = document.querySelector(`.guess`);
const hiddenHint = document.querySelector(`.mystery`);
const hiddenHintId = document.getElementById(`mystery1`);
const playAgain = document.querySelector(`.again`);
const headerBorder = document.querySelector(`header`);
const attemptsLeft = document.querySelector(`.score`);

submitBtn.addEventListener(`click`, function () {
  const guess = document.querySelector(`.guess`).value;
  if (!guess) {
    incrementTotAttempts();
    //if nothing is in the input box it populates this line of code
    inputBox.style.color = `blue`;
    displayMessage(`You didn't even guess!`);
    documentBody.style.backgroundColor = `blue`;
    submitBtn.style.boxShadow = `5px 5px 5px red`;
    playAgain.style.boxShadow = `5px 5px 5px red`;
  } else if (guess.toUpperCase() === food.toUpperCase()) {
    //no longer case sensitive
    //if the input === random food populates this code
    if (score > highscores) {
      highscores = score;
      highScoreNumber(highscores);
      saveHighScore(score);
    }
    incrementTotAttempts();
    inputBox.style.color = `green`;
    displayMessage(`Great job! That's correct!`);
    documentBody.style.backgroundColor = `green`;
    hiddenHint.style.backgroundColor = `black`;
    hiddenHint.style.color = `#add8e6`;
    hiddenHint.style.borderRadius = ``;
    hiddenHint.style.width = `100%`;
    hiddenHint.textContent = food;
    submitBtn.style.boxShadow = `5px 5px 5px aqua`;
    playAgain.style.boxShadow = `5px 5px 5px aqua`;
  } else if (guess != food)
    if (score > 0) {
      //if input != to food populates this
      {
        incrementTotAttempts();
        choices = getRandom(wrongChoices);
        displayMessage(choices);
        score--;
        attemptsLeft.textContent = score;
        documentBody.style.backgroundColor = `red`;
        hiddenHint.style.color = `var(--mystery)`;
        submitBtn.style.boxShadow = `5px 5px 5px aqua`;
        playAgain.style.boxShadow = `5px 5px 5px aqua`;
        inputBox.style.color = `red`;
      }
    } else {
      //this populates when no more attempts exist
      displayMessage(`Better luck next time.`);
      documentBody.style.backgroundColor = `black`;
      headerBorder.style.color = `aquamarine`;
      hiddenHint.style.width = `100%`;
      hiddenHint.style.backgroundColor = `teal`;
      hiddenHint.textContent = food;
      hiddenHint.style.fontSize = `2.5vh`;
      hiddenHint.style.color = `white`;
      hiddenHint.style.borderRadius = ``;
      hiddenHint.textContent = food;
      headerBorder.style.borderBottom = `7px solid aquamarine`;
      submitBtn.style.boxShadow = `5px 5px 5px red`;
      playAgain.style.boxShadow = `5px 5px 5px red`;
      hiddenHintId.textContent = food;
      inputBox.style.color = `black`;
    }
});

food = getRandom(foodChoices);
str = food.substring(0, 2); //runs the hint box.

//hover effect for the hint
// function changeHint() {
//   document.getElementById('hint').style.backgroundColor = `black`;
//   document.getElementById('hint').style.color = `aqua`;
//   document.getElementById('hint').textContent = str;
// }

// function defaultText() {
//   document.getElementById('hint').textContent = ``;
//   document.getElementById('hint').style.backgroundColor = ``;
// }
//end of hint code

food = getRandom(foodChoices);
str = food.substring(0, 2);
function changeText() {
  //----controls hover of the mystery box----
  let mouseover = document.getElementById(`mystery1`);

  guess = document.querySelector(`.guess`).value;
  if (guess === food) {
    mouseover.textContent = food;
  } else if (score > 0) {
    (mouseover.textContent = str),
      (mouseover.style.fontSize = '2.5vh'),
      (mouseover.style.backgroundColor = 'black'),
      (mouseover.style.color = '#add8e6');
    mouseover.style.width = `var(--mysteryWidth)`;
    mouseover.style.borderRadius = `5%`;
  }
}

// //code below is for HTML of #mystery
// // onmouseover="changeText()"
// // onmouseout="defaultText()"

food = getRandom(foodChoices);
str = food.substring(0, 2);
function defaultText() {
  let mouseout = document.getElementById(`mystery1`);
  guess = document.querySelector(`.guess`).value;
  if (guess === food) {
    mouseover.textContent = food;
  } else if (score > 0) {
    mouseout.textContent = '???';
    mouseout.style.fontSize = '2.5vh';
    mouseout.style.backgroundColor = '';
    mouseout.style.color = 'var(--mystery)';
  }
} //---- end of mystery code----

//code for play again button to reset everything
playAgain.addEventListener(`click`, function () {
  score = 7;
  food = getRandom(foodChoices);
  choices = getRandom(wrongChoices);
  str = food.substring(0, 2);
  displayMessage(`Seriously, Try it!`);
  documentBody.style.backgroundColor = `rgb(39, 73, 73)`;
  attemptsLeft.textContent = score;
  inputBox.value = ``;
  hiddenHint.style.color = `var(--mystery)`;
  hiddenHint.style.padding = `0.3em`;
  hiddenHint.textContent = `???`;
  hiddenHint.style.fontSize = `2.5vh`;
  headerBorder.style.color = `aqua`;
  hiddenHint.style.backgroundColor = ``;
  document.querySelector(`header`).style.borderBottom = `7px solid black`;
  submitBtn.style.boxShadow = `5px 5px 5px red`;
  playAgain.style.boxShadow = `5px 5px 5px red`;
  // document.getElementById('hint').style.backgroundColor = ``;
  // document.getElementById('hint').style.color = ``;
  inputBox.style.color = ``;
  hiddenHint.style.width = `var(--mysteryWidth)`;
});

// Get the input field
let input = document.querySelector('.guess');

// Execute a function when the user releases a key on the keyboard
input.addEventListener('keyup', function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.querySelector('.submit').click();
  }
});

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function saveHighScore(maxScore) {
  const everlastingHighScore = Number(localStorage.getItem(`HighScore`));
  if (!everlastingHighScore || everlastingHighScore <= maxScore) {
    localStorage.setItem(`HighScore`, maxScore);
    highScoreNumber(maxScore);
  }
}
//F2 change names everywhere faster
function init() {
  const findScore = localStorage.getItem(`HighScore`);
  highScoreNumber(findScore || 0);
  const findTotalAttempts = Number(localStorage.getItem(`Attempts`));
  document.querySelector(`.attemptsTotal`).textContent = findTotalAttempts || 0;
  lifeTimeAttempts = findTotalAttempts || 0;
}

function incrementTotAttempts() {
  lifeTimeAttempts++;
  localStorage.setItem(`Attempts`, lifeTimeAttempts);
  document.querySelector(`.attemptsTotal`).textContent = lifeTimeAttempts;
}

function resetHighscore() {
  localStorage.removeItem(`HighScore`);
  init();
}

document.addEventListener(`DOMContentLoaded`, init);

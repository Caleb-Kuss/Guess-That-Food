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
document.querySelector(`.submit`).addEventListener(`click`, function () {
  const guess = document.querySelector(`.guess`).value;
  if (!guess) {
    incrementTotAttempts();
    //if nothing is in the input box it populates this line of code
    document.querySelector(`.guess`).style.color = `blue`;
    document.querySelector(`.message`).textContent = `You didn't even guess!`;
    document.querySelector(`body`).style.backgroundColor = `blue`;
    document.querySelector(`.submit`).style.boxShadow = `5px 5px 5px red`;
    document.querySelector(`.again`).style.boxShadow = `5px 5px 5px red`;
  } else if (guess.toUpperCase() === food.toUpperCase()) {
    //no longer case sensitive
    //if the input === random food populates this code
    if (score > highscores) {
      highscores = score;
      document.querySelector(`.highScoreNumber`).textContent = highscores;
      saveHighScore(score);
    }
    incrementTotAttempts();
    document.querySelector(`.guess`).style.color = `green`;
    document.querySelector(
      `.message`
    ).textContent = `Great job! That's correct!`;
    document.querySelector(`body`).style.backgroundColor = `green`;
    document.querySelector(`.mystery`).style.backgroundColor = `black`;
    document.querySelector(`.mystery`).style.color = `#add8e6`;
    document.querySelector(`.mystery`).style.borderRadius = ``;
    document.querySelector(`.mystery`).style.width = `100%`;
    document.querySelector(`.mystery`).textContent = food;
    document.querySelector(`.submit`).style.boxShadow = `5px 5px 5px aqua`;
    document.querySelector(`.again`).style.boxShadow = `5px 5px 5px aqua`;
  } else if (guess != food)
    if (score > 0) {
      //if input != to food populates this
      {
        incrementTotAttempts();
        choices = getRandom(wrongChoices);
        document.querySelector(`.message`).textContent = choices;
        score--;
        document.querySelector(`.score`).textContent = score;
        document.querySelector(`body`).style.backgroundColor = `red`;
        document.querySelector(`.mystery`).style.color = `var(--mystery)`;
        document.querySelector(`.submit`).style.boxShadow = `5px 5px 5px aqua`;
        document.querySelector(`.again`).style.boxShadow = `5px 5px 5px aqua`;
        document.querySelector(`.guess`).style.color = `red`;
      }
    } else {
      //this populates when no more attempts exist
      document.querySelector(`.message`).textContent = `Better luck next time.`;
      document.querySelector(`body`).style.backgroundColor = `black`;
      document.querySelector(`.header`).style.color = `aquamarine`;
      document.querySelector(`.mystery`).style.width = `100%`;
      document.querySelector(`.mystery`).style.backgroundColor = `teal`;
      document.querySelector(`.mystery`).textContent = food;
      document.querySelector(`.mystery`).style.fontSize = `2.5vh`;
      document.querySelector(`.mystery`).style.color = `white`;
      document.querySelector(`.mystery`).style.borderRadius = ``;
      document.querySelector(`.mystery`).textContent = food;
      document.querySelector(
        `header`
      ).style.borderBottom = `7px solid aquamarine`;
      document.querySelector(`.submit`).style.boxShadow = `5px 5px 5px red`;
      document.querySelector(`.again`).style.boxShadow = `5px 5px 5px red`;
      document.getElementById(`mystery1`).textContent = food;
      document.querySelector(`.guess`).style.color = `black`;
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
document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 7;
  food = getRandom(foodChoices);
  choices = getRandom(wrongChoices);
  str = food.substring(0, 2);
  document.querySelector(`.message`).textContent = `Seriously, Try it!`;
  document.querySelector(`body`).style.backgroundColor = `rgb(39, 73, 73)`;
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.guess`).value = ``;
  document.querySelector(`.mystery`).style.color = `var(--mystery)`;
  document.querySelector(`.mystery`).style.padding = `0.3em`;
  document.querySelector(`.mystery`).textContent = `???`;
  document.querySelector(`.mystery`).style.fontSize = `2.5vh`;
  document.querySelector(`.header`).style.color = `aqua`;
  document.querySelector(`.mystery`).style.backgroundColor = ``;
  document.querySelector(`header`).style.borderBottom = `7px solid black`;
  document.querySelector(`.submit`).style.boxShadow = `5px 5px 5px red`;
  document.querySelector(`.again`).style.boxShadow = `5px 5px 5px red`;
  document.getElementById('hint').style.backgroundColor = ``;
  document.getElementById('hint').style.color = ``;
  document.querySelector(`.guess`).style.color = ``;
  document.querySelector(`.mystery`).style.width = `var(--mysteryWidth)`;
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
    document.querySelector(`.highScoreNumber`).textContent = maxScore;
  }
}
//F2 change names everywhere faster
function init() {
  const findScore = localStorage.getItem(`HighScore`);
  document.querySelector(`.highScoreNumber`).textContent = findScore || 0;
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

`use strict`;

let foodChoices = [
  'Pizza',
  'burgers',
  'Nachos',
  'Tacos',
  'Fish',
  'Chili',
  'lamb',
  'Chicken',
  'Ramen',
  `sushi`,
  `oatmeal`,
  `mango`,
];
let wrongChoices = [
  `Nope. Try Again`,
  `Wrong. Try Once More!`,
  `Incorrect. Don't Give Up`,
  `Nope, Keep On Trying`,
  `You Can Do It!`,
];
//code for game to work
let food = getRandom(foodChoices);
let choices = getRandom(wrongChoices);
let score = 10;
let highscores = 0;
let lifeTimeAttempts = 0;
let playing = true;
const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};
//added highscores=Number-- to ensure it finds it and adds to page
const highScoreNumber = function (highScore) {
  document.querySelector(`.highScoreNumber`).textContent = highScore;
  highscores = Number(highScore || 0);
};

const documentBody = document.querySelector(`body`);
const submitBtn = document.querySelector(`.submit`);
const inputBox = document.querySelector(`.guess`);
const hiddenHint = document.querySelector(`.mystery`);
const hiddenHintId = document.getElementById(`mystery1`);
const playAgain = document.querySelector(`.again`);
const headerBorder = document.querySelector(`header`);
const attemptsLeft = document.querySelector(`.score`);
const resetBtn = document.querySelector(`.reset`);
const resetDescHidden = document.querySelector(`.resetDescription`);
const resetBtnHidden = document.querySelector(`.resetHidden`);
const closeBtnHidden = document.querySelector(`.closeHidden`);
const overlayHidden = document.querySelector(`.overlay`);
const mainSection = document.querySelector(`.main`);

const startUp = function () {
  playing = true;
  score = 10;
  food = getRandom(foodChoices);
  choices = getRandom(wrongChoices);
  str = food.substring(0, 2);
  displayMessage(`Seriously, Try it!`);
  attemptsLeft.textContent = score;
  inputBox.value = ``;
  hiddenHint.style.color = `var(--mystery)`;
  hiddenHint.style.padding = `0.3em`;
  hiddenHint.textContent = `???`;
  hiddenHint.style.fontSize = `1em`;
  headerBorder.style.color = `aqua`;
  hiddenHint.style.backgroundColor = ``;
  submitBtn.style.boxShadow = `5px 5px 5px red`;
  playAgain.style.boxShadow = `5px 5px 5px red`;
  resetBtn.style.boxShadow = `5px 5px 5px red`;
  inputBox.style.color = ``;
  hiddenHint.style.width = `var(--mysteryWidth)`;
};

submitBtn.addEventListener(`click`, function () {
  const guess = document.querySelector(`.guess`).value;
  if (playing) {
    if (!guess) {
      //if nothing is in the input box it populates this line of code
      inputBox.style.color = `blue`;
      displayMessage(`You didn't even guess!`);
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
      playing = false;
      incrementTotAttempts();
      inputBox.style.color = `green`;
      displayMessage(`Great job! That's correct!`);
      hiddenHint.style.backgroundColor = `black`;
      hiddenHint.style.color = `#add8e6`;
      hiddenHint.style.borderRadius = ``;
      hiddenHint.style.width = `100%`;
      hiddenHint.textContent = food;
      submitBtn.style.boxShadow = `5px 5px 5px aqua`;
      playAgain.style.boxShadow = `5px 5px 5px aqua`;
      resetBtn.style.boxShadow = `5px 5px 5px aqua`;
    } else if (guess != food)
      if (score > 0) {
        //if input != to food populates this
        {
          incrementTotAttempts();
          choices = getRandom(wrongChoices);
          displayMessage(choices);
          score--;
          attemptsLeft.textContent = score;
          hiddenHint.style.color = `var(--mystery)`;
          submitBtn.style.boxShadow = `5px 5px 5px aqua`;
          playAgain.style.boxShadow = `5px 5px 5px aqua`;
          resetBtn.style.boxShadow = `5px 5px 5px aqua`;
          inputBox.style.color = `red`;
        }
      } else {
        //this populates when no more attempts exist

        displayMessage(`Better luck next time.`);
        documentBody.style.backgroundColor = `black`;
        headerBorder.style.color = `aquamarine`;
        hiddenHint.style.width = `100%`;
        hiddenHint.style.backgroundColor = `rgba(127, 255, 212, 0.8)`;
        hiddenHint.textContent = food;
        hiddenHint.style.fontSize = `1em`;
        hiddenHint.style.color = `white`;
        hiddenHint.style.borderRadius = ``;
        hiddenHint.textContent = food;
        submitBtn.style.boxShadow = `5px 5px 5px red`;
        playAgain.style.boxShadow = `5px 5px 5px red`;
        resetBtn.style.boxShadow = `5px 5px 5px red`;
        hiddenHintId.textContent = food;
        inputBox.style.color = `black`;
      }
  }
});
console.log(submitBtn, inputBox);
food = getRandom(foodChoices);
str = food.substring(0, 2); //runs the hint box.

food = getRandom(foodChoices);
str = food.substring(0, 2);
function changeText() {
  //----controls hover of the mystery box----
  let mouseover = document.getElementById(`mystery1`);
  guess = document.querySelector(`.guess`).value;
  if (guess.toUpperCase() === food.toUpperCase()) {
    mouseover.textContent = food;
  } else if (score > 0) {
    (mouseover.textContent = str),
      (mouseover.style.fontSize = '1em'),
      (mouseover.style.backgroundColor = 'black'),
      (mouseover.style.color = '#add8e6');
    mouseover.style.width = `var(--mysteryWidth)`;
    mouseover.style.borderRadius = `5%`;
  }
}

food = getRandom(foodChoices);
str = food.substring(0, 2);
function defaultText() {
  let mouseout = document.getElementById(`mystery1`);
  guess = document.querySelector(`.guess`).value;
  if (guess.toUpperCase() === food.toUpperCase()) {
    mouseout.textContent = food;
  } else if (score > 0) {
    mouseout.textContent = '???';
    mouseout.style.fontSize = '1em';
    mouseout.style.backgroundColor = '';
    mouseout.style.color = 'var(--mystery)';
  }
} //---- end of mystery box----

//code for play again button to reset everything
playAgain.addEventListener(`click`, startUp);

// executes the submit button when the user presses the enter key--
document.addEventListener(`keydown`, function (e) {
  if (e.key === `Enter`) {
    submitBtn.click();
  }
});
//-----------------------------------------------------------------

// Executes the close modal function when the user releases the Escape key---
document.addEventListener(`keydown`, function (e) {
  if (
    e.key === `Escape` &&
    !resetDescHidden.classList.contains(`hidden`) &&
    !overlayHidden.classList.contains(`hidden`)
  ) {
    closeReset();
  }
});
//---------------------------------------------------------------------------
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function saveHighScore(maxScore) {
  const everlastingHighScore = Number(localStorage.getItem(`HighScore`));
  if (!everlastingHighScore || everlastingHighScore <= maxScore) {
    localStorage.setItem(`HighScore`, maxScore);
    highScoreNumber(maxScore);
  } else {
  }
}
//F2 change names everywhere faster

//-----added currentHighScore since two names for highScoreNumber-----
function init() {
  const findScore = localStorage.getItem(`HighScore`);
  const currentHighestScore = findScore ? Number(findScore) : 0;
  highScoreNumber(currentHighestScore);
  const findTotalAttempts = Number(localStorage.getItem(`Attempts`));
  document.querySelector(`.attemptsTotal`).textContent = findTotalAttempts || 0;
  lifeTimeAttempts = findTotalAttempts || 0;
}

function incrementTotAttempts() {
  lifeTimeAttempts++;
  localStorage.setItem(`Attempts`, lifeTimeAttempts);
  document.querySelector(`.attemptsTotal`).textContent = lifeTimeAttempts;
}
//-----find a perm fix. reload is quick fix-----
function resetHighscore() {
  localStorage.removeItem(`HighScore`);
  startUp();
  init();
}
// open modal function
const openReset = function () {
  resetDescHidden.classList.remove('hidden');
  overlayHidden.classList.remove('hidden');
};

//close modal function
const closeReset = function () {
  resetDescHidden.classList.add('hidden');
  overlayHidden.classList.add('hidden');
};

//reset button inside modal
resetBtn.addEventListener(`click`, openReset);
resetBtnHidden.addEventListener(`click`, () => {
  resetHighscore(), closeReset();
});

//closing modal
closeBtnHidden.addEventListener(`click`, closeReset);
resetDescHidden.addEventListener(`click`, closeReset);
overlayHidden.addEventListener(`click`, closeReset);
mainSection.addEventListener(`click`, closeReset);
document.addEventListener(`DOMContentLoaded`, init);

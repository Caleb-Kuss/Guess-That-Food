`use strict`;
//----controls hover of the mystery box----
// function changeText() {
//   food = foodChoices[Math.floor(Math.random() * foodChoices.length)];
//   let mouseover = document.getElementById(`.hint`);
//   (mouseover.querySelector = food),
//     (mouseover.style.fontSize = '2rem'),
//     (mouseover.style.backgroundColor = 'black'),
//     (mouseover.style.color = '#add8e6');
// }

//code below is for HTML of #mystery
// onmouseover="changeText(`No Hints Here!`)"
// onmouseout="defaultText()"
// function defaultText() {
//   let mouseout = document.getElementById(`.hint`);
//   mouseout.textContent = '???';
//   mouseout.style.fontSize = '5rem';
//   mouseout.style.backgroundColor = 'rgb(31, 110, 146)';
//   mouseout.style.color = 'red';
// }
//---- end of mystery code----

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
let food = foodChoices[Math.floor(Math.random() * foodChoices.length)];
let choices = wrongChoices[Math.floor(Math.random() * wrongChoices.length)];
let score = 9;
let highscores = 0;
document.querySelector(`.submit`).addEventListener(`click`, function () {
  const guess = document.querySelector(`.guess`).value;
  if (!guess) {
    //if nothing is in the input box it populates this line of code
    document.querySelector(`.message`).textContent = `You didn't even guess!`;
    document.querySelector(`body`).style.backgroundColor = `blue`;
    document.querySelector(`.submit`).style.boxShadow = `5px 5px 5px red`;
    document.querySelector(`.again`).style.boxShadow = `5px 5px 5px red`;
  } else if (guess === food) {
    //if the input === random food populates this code
    if (score > highscores) {
      highscores = score;
      document.querySelector(`.highScoreNumber`).textContent = highscores;
    }
    document.querySelector(
      `.message`
    ).textContent = `Great job! That's correct!`;
    document.querySelector(`.mystery`).style.color = `red`;
    document.querySelector(`body`).style.backgroundColor = `green`;
    document.querySelector(`.mystery`).textContent = food;
    document.querySelector(`.submit`).style.boxShadow = `5px 5px 5px aqua`;
    document.querySelector(`.again`).style.boxShadow = `5px 5px 5px aqua`;
  } else if (guess != food)
    if (score > 0) {
      //if input != to food populates this
      {
        choices = wrongChoices[Math.floor(Math.random() * wrongChoices.length)];
        document.querySelector(`.message`).textContent = choices;
        score--;
        document.querySelector(`.score`).textContent = score;
        document.querySelector(`body`).style.backgroundColor = `red`;
        document.querySelector(`.mystery`).style.color = `black`;
        document.querySelector(`.submit`).style.boxShadow = `5px 5px 5px aqua`;
        document.querySelector(`.again`).style.boxShadow = `5px 5px 5px aqua`;
      }
    } else {
      //this populates when no more attempts exist
      document.querySelector(`.message`).textContent = `Better luck next time.`;
      document.querySelector(`body`).style.backgroundColor = `black`;
      document.querySelector(`.header`).style.color = `aquamarine`;
      document.querySelector(`.mystery`).style.backgroundColor = `teal`;
      document.querySelector(`.mystery`).textContent = food;
      document.querySelector(`.mystery`).style.fontSize = `5em`;
      document.querySelector(`.mystery`).style.color = `white`;
      document.querySelector(`.mystery`).textContent = food;
      document.querySelector(
        `header`
      ).style.borderBottom = `7px solid aquamarine`;
      document.querySelector(`.submit`).style.boxShadow = `5px 5px 5px red`;
      document.querySelector(`.again`).style.boxShadow = `5px 5px 5px red`;
    }
});

food = foodChoices[Math.floor(Math.random() * foodChoices.length)];
str = food.substring(0, 2); //runs the hint box.

//hover effect for the hint
function changeHint() {
  document.getElementById('hint').style.backgroundColor = `black`;
  document.getElementById('hint').style.color = `aqua`;
  document.getElementById('hint').textContent = str;
}

function defaultText() {
  document.getElementById('hint').textContent = ``;
  document.getElementById('hint').style.backgroundColor = ``;
}
//end of hint code

//code for play again button to reset everything
document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 9;
  food = foodChoices[Math.floor(Math.random() * foodChoices.length)];
  choices = wrongChoices[Math.floor(Math.random() * wrongChoices.length)];
  str = food.substring(0, 2);
  document.querySelector(`.message`).textContent = `Seriously, Try it!`;
  document.querySelector(`body`).style.backgroundColor = `rgb(39, 73, 73)`;
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.guess`).value = ``;
  document.querySelector(`.mystery`).style.color = `red`;
  document.querySelector(`.mystery`).style.padding = `0.3em`;
  document.querySelector(`.mystery`).textContent = `???`;
  document.querySelector(`.mystery`).style.fontSize = `5rem`;
  document.querySelector(`.header`).style.color = `cadetblue`;
  document.querySelector(`.mystery`).style.backgroundColor = ``;
  document.querySelector(`header`).style.borderBottom = `7px solid black`;
  document.querySelector(`.submit`).style.boxShadow = `5px 5px 5px red`;
  document.querySelector(`.again`).style.boxShadow = `5px 5px 5px red`;
  document.getElementById('hint').style.backgroundColor = ``;
  document.getElementById('hint').style.color = ``;
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

confirm(`This website does not work well on mobile.`);

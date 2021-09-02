`use strict`;
// ----controls hover of the mystery box----
// function changeText(text) {
//   let mouseover = document.getElementsByClassName(`.mystery`);
//   (mouseover.textContent = text),
//     (mouseover.style.fontSize = '2rem'),
//     (mouseover.style.backgroundColor = 'black'),
//     (mouseover.style.color = '#add8e6');
// }

//code below is for HTML of #mystery
// onmouseover="changeText(`No Hints Here!`)"
// onmouseout="defaultText()"
// function defaultText() {
//   let mouseout = document.getElementsByName(`.mystery`);
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
  `Wrong. Try once more!`,
  `Incorrect. Don't give up`,
  `No, keep on trying`,
];
let food = foodChoices[Math.floor(Math.random() * foodChoices.length)];
let choices = wrongChoices[Math.floor(Math.random() * wrongChoices.length)];
let score = 9;
console.log(food);
document.querySelector(`.submit`).addEventListener(`click`, function () {
  const guess = document.querySelector(`.guess`).value;
  if (!guess) {
    document.querySelector(`.message`).textContent = `You didn't even guess!`;
    document.querySelector(`body`).style.backgroundColor = `blue`;
    document.querySelector(`.submit`).style.boxShadow = `5px 5px 5px red`;
    document.querySelector(`.again`).style.boxShadow = `5px 5px 5px red`;
  } else if (guess === food) {
    document.querySelector(
      `.message`
    ).textContent = `Great job! That's correct!`;
    document.querySelector(`body`).style.backgroundColor = `green`;
    document.querySelector(`.mystery`).textContent = food;
  } else if (guess != food)
    if (score > 0) {
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

document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 9;
  food = foodChoices[Math.floor(Math.random() * foodChoices.length)];
  choices = wrongChoices[Math.floor(Math.random() * wrongChoices.length)];
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
});

confirm(`This website does not work well on mobile.`);

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
  'CheeseBurger',
  'Nachos',
  'Tacos',
  'Fish',
  'HotDogs',
  'CornDogs',
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
  } else if (guess === food) {
    document.querySelector(
      `.message`
    ).textContent = `Great job! That's correct!`;
    document.querySelector(`body`).style.backgroundColor = `green`;
    document.querySelector(`.mystery`).textContent = food;
  } else if (guess != food)
    if (score > 0) {
      {
        document.querySelector(`.message`).textContent = choices;
        score--;
        document.querySelector(`.score`).textContent = score;
        document.querySelector(`body`).style.backgroundColor = `red`;
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
  document.querySelector(`.mystery`).style.marginTop = `-2.5em`;
  document.querySelector(`.mystery`).style.marginleft = `-1.5em`;
  document.querySelector(`.mystery`).style.textAlign = `center`;
  document.querySelector(`.mystery`).style.padding = `0.5em`;
  document.querySelector(`.mystery`).textContent = `???`;
  document.querySelector(`.mystery`).style.fontSize = `5rem`;
  document.querySelector(`.header`).style.color = `green`;
});

confirm(`This website does not work on mobile.
Also, the choices in the table are "case sensative" and contain no "spaces"`);

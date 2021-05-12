'use strict';

// recoger el número que introdujo la usuaria
// hacer validaciones de número (funciones con condicionales)

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(100);
console.log(randomNumber);

const submitButton = document.querySelector('.js-submit');
console.log(submitButton);

const input = document.querySelector('.js-input');
console.log(input.value);

const clue = document.querySelector('.js-clue');

function handlerClickButton(ev) {
  ev.preventDefault();
  const inputValue = input.value;
  if (inputValue > randomNumber) {
    clue.value = 'Demasiado alto';
  } else if (inputValue < randomNumber) {
    clue.value = 'Demasiado bajo';
  } else if (inputValue === randomNumber) {
    clue.value = 'Has ganado campeona!';
  } else if (isNaN(inputValue)) {
    clue.value = 'El número debe 
    entre 1 y 100';
}

submitButton.addEventListener('click', handlerClickButton);

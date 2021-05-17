'use strict';

/* generar un número random
// cuando la usuaria pone un número y hace click:
1.1 Cuando la jugadora introduzca un número mayor que el aleatorio y pulse en Prueba: Demasiado alto.
1.2 Cuando la jugadora introduzca un número menor que el aleatorio y pulse en Prueba: Demasiado bajo.
1.3 Cuando la jugadora introduzca un número igual que el aleatorio y pulse en Prueba: Has ganado campeona!!!
1.4 Cuando la jugadora no introduzca un número válido y pulse en Prueba: El número debe estar
entre 1 y 100.
2. Crear un contador, cada vez que hagamos click se suma 1*/

const randomNumber = getRandomNumber(100);
const submitButton = document.querySelector('.js-submit');
const input = document.querySelector('.js-input');
const clue = document.querySelector('.js-clue');
const trie = document.querySelector('.js-tries');

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function clickValue(ev) {
  ev.preventDefault();
  const inputValue = parseInt(input.value);
  if (inputValue > randomNumber) {
    clue.innerHTML = 'Demasiado alto';
  } else if (inputValue < randomNumber) {
    clue.innerHTML = 'Demasiado bajo';
  } else if (inputValue === randomNumber) {
    clue.innerHTML = 'Has ganado campeona!';
  } else if (isNaN(inputValue)) {
    clue.innerHTML = 'El número debe entre 1 y 100';
  }
}

// Create a counter which increments the counter and paints its value in the HTML when the user clicks the test button.

let counter = 0;

function clickCounter() {
  counter += 1;
  trie.innerHTML = `Número de intentos: ${counter}`;
}

// calling multiple functions inside an unique handler.

function handlerClickButton(ev) {
  clickValue(ev);
  clickCounter();
}

submitButton.addEventListener('click', handlerClickButton);

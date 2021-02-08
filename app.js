const input = document.querySelector('.results');
let btns = document.querySelectorAll('.btn');
const enterKey = document.querySelector('#enter');
const clearKey = document.querySelector('#clear');
let currentVal;
let operatorVal;
let operator;

const clear = function() {
  currentVal = "";
  operatorVal ="";
  operator = "";
}

for (let btn of btns) {
  if (btn.innerHTML === 'Enter') {
    btn.addEventListener('click', () => {
        operatorVal = input.value;
        operate(operator, currentVal, operatorVal);
      })

    }
 

else if (btn.innerHTML === 'clear') {
  btn.addEventListener('click', () => {
    input.value = "";
    clear()});
  }
else if (btn.innerHTML === '*') {
  btn.addEventListener('click', () => {
    operator = 'multiply';
    input.value = "";})
  }
else if (btn.innerHTML === '/') {
  btn.addEventListener('click', () => {
    operator = 'divide';
    input.value = "";});
  }
else if (btn.innerHTML === '+') {
  btn.addEventListener('click', () => {
    operator = 'add';
    currentVal = input.value;
    input.value = ""});
    // input.value = "";});
  }
else if (btn.innerHTML === '-') {
  btn.addEventListener('click', () => {
    operator = 'subtract';
    input.value = "";});
  }
else {
  btn.addEventListener('click', () => {
    input.value = input.value + btn.innerHTML;
})}
}
// function 
// Core Operators
const add = function (a,b)  {
  return a + b;
}

function subtract (a,b) {
  return a - b;
}

function multiply (a,b) {
  return a * b;
}

function divide (a,b) {
  return a / b;
}

// Operator function calls core operators
function operate (operator, a, b) {
 const inputOperator = operator.toLowerCase();
 if (inputOperator === 'add') {
   let result = add(a,b)
   input.innerHTML = result;
  clear()}
 else if (inputOperator === 'subtract') {return subtract(a,b)}
 else if (inputOperator === 'multiply') {return multiply(a,b)}
 else if (inputOperator === 'divide') {return divide(a,b)}
 else {return "not a valid operator"}
};
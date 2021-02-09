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
        console.log(operatorVal);
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
      currentVal = parseFloat(input.value);
      input.value = "";})
    }
  else if (btn.innerHTML === '/') {
    btn.addEventListener('click', () => {
      operator = 'divide';
      currentVal = input.value;
      input.value = "";});
    }
  else if (btn.innerHTML === '+') {
    btn.addEventListener('click', () => {
      operator = 'add';
      currentVal = input.value;
      input.value = ""});
      input.value = ""
      // input.value = "";});
    }
  else if (btn.innerHTML === '-') {
    btn.addEventListener('click', () => {
      operator = 'subtract';
      currentVal = input.value;
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
   let result = add(parseFloat(a),parseFloat(b))
   input.value = result;
   console.log(result)
 }
 else if (inputOperator === 'subtract') {
  let result = subtract(parseFloat(a),parseFloat(b))
  input.value = result;
  console.log(result)
  }
 else if (inputOperator === 'multiply') {
  let result = multiply(parseFloat(a),parseFloat(b))
  input.value = result;
  console.log(result)
 }
 else if (inputOperator === 'divide') {
  let result = divide(parseFloat(a),parseFloat(b))
  input.value = result;
  console.log(result)
  }
 else {return "not a valid operator"}
};
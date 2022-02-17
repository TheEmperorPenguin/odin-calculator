const numbers = document.getElementsByClassName("number");
const screen = document.getElementById("screen");
let actualDisplay = "";

const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
};

const multiply = function (a, b) {
  return a * b;
};

const power = function (a, b) {
  return a ** b;
};

const divide = function (a, b) {
  return a / b;
};

const operate = function (operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      return "ERROR";
  }
};

const createNumber = function (value) {
  let actualDisplay = screen.innerText;
  if (actualDisplay.length >= 10) {
    return;
  }
  actualDisplay = `${actualDisplay}${value}`;
  toDisplay(actualDisplay);
};
const toDisplay = function (display) {
  screen.innerText = display;
};

Array.from(numbers).forEach((number) => {
  console.log(number);
  number.addEventListener("click", function () {
    createNumber(number.innerText);
    console.log(number);
  });
});

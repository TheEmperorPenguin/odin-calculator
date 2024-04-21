const numbers = document.getElementsByClassName("number");
const operators = document.getElementsByClassName("operator");
const screen = document.getElementById("screen");
let display = "";
let lastDisplay = undefined;
let lastOperator = undefined;
let currentoperator = "";
let firstEntry = true;
let tempDisplay = false;
let needReset = false;

const clearDisplay = function () {
  if(needReset == true){
    resetCalculator();
    return;
  }
  screen.innerText = "";
  display = ""
};

const add = function (a, b = 0) {
  return +a + +b;
};

const subtract = function (a, b = 0) {
  return a - b;
};

const multiply = function (a, b = 1) {
  return a * b;
};

const divide = function (a, b = 1) {
  if (b == 0){
    return "ERROR";
  }
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
      if(b == 0){
        return "ERROR";
      }
      return Math.round(divide(a, b));
    default:
      return "ERROR";
  }
};

function resetCalculator() {
  display = "";
  lastDisplay = undefined;
  lastOperator = undefined;
  currentOperator = "";
  firstEntry = true;
  screen.innerText = display;
  needReset = false;
}

function updateDisplay() {
  screen.innerText = display;
}

function modifyCurrentValue(str) {
  if (display.length > 9) {
    return
  } else if (tempDisplay == true){
    clearDisplay();
    tempDisplay = false;
  }
  display = `${display}${str}`;
  updateDisplay()
}

function modifyCurrentOperator(operator) {
  if (operator === "AC") {
    resetCalculator();
    return;
  } else if (firstEntry == true) {
    if(operator == "="){
      return;
    }
    lastDisplay = display
    lastOperator = operator
    clearDisplay();
    firstEntry = false;
    return;
  }
  
  display = operate(lastOperator, lastDisplay, display);
  lastDisplay = display;
  lastOperator = operator;
  screen.innerText = display;
  tempDisplay = true;
  if(operator == "="){
    console.log("patate");
    needReset = true;
  }

}
function keyboardInput(e) {
  if (e.key >= '0' && e.key <= '9') modifyCurrentValue(e.key);
  if (e.key === '=') modifyCurrentOperator(e.key);
  if (e.key === 'Escape') resetCalculator();
  if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/'){
  modifyCurrentOperator(e.key);
  }
}

Array.from(numbers).forEach((number) => {
  number.addEventListener("click", function () {
    modifyCurrentValue(number.innerText);
  });
});
Array.from(operators).forEach((operator) => {
  operator.addEventListener("click", function () {
    modifyCurrentOperator(operator.innerText);
  });
});
window.addEventListener("keydown", keyboardInput);

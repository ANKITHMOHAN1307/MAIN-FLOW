let currentNumber = "";
let previousNumber = "";
let operator = "";

function appendNumber(number) {
  currentNumber += number;
  document.getElementById("display").value = currentNumber;
}

function appendOperator(op) {
  if (currentNumber !== "") {
    previousNumber = currentNumber;
    currentNumber = "";
    operator = op;
  }
}

function clearDisplay() {
  currentNumber = "";
  previousNumber = "";
  operator = "";
  document.getElementById("display").value = "";
}

function calculate() {
  if (currentNumber !== "" && previousNumber !== "") {
    let result = 0;
    const prevNum = parseFloat(previousNumber);
    const currNum = parseFloat(currentNumber);

    switch (operator) {
      case "+":
        result = prevNum + currNum;
        break;
      case "-":
        result = prevNum - currNum;
        break;
      case "*":
        result = prevNum * currNum;
        break;
      case "/":
        if (currNum === 0) {
          alert("Division by zero is not allowed!");
          return;
        }
        result = prevNum / currNum;
        break;
    }

    currentNumber = result.toString();
    previousNumber = "";
    operator = "";
    document.getElementById("display").value = currentNumber;
  }
}

document.addEventListener("keydown", function(event) {
  const allowedKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ".", "+", "-", "*", "/"];
  if (allowedKeys.includes(event.key)) {
    if (event.key === ".") {
      // Prevent multiple decimal points
      if (!currentNumber.includes(".")) {
        appendNumber(event.key);
      }
    } else {
      appendNumber(event.key);
    }
  } else if (event.key === "Enter") {
    calculate();
  } else if (event.key === "Backspace") {
    // Remove last character from current number
    currentNumber = currentNumber.slice(0, -1);
    document.getElementById("display").value = currentNumber;
  } else if (event.key === "Escape") {
    clearDisplay();
  }
});

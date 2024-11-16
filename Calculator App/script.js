let currentDisplay = document.getElementById("current");
let historyDisplay = document.getElementById("history");
let previousResult = null;

function appendSymbol(symbol) {
  currentDisplay.textContent += symbol;
}

function clearDisplay() {
  currentDisplay.textContent = "";
  historyDisplay.textContent = "";
}

function deleteLast() {
  currentDisplay.textContent = currentDisplay.textContent.slice(0, -1);
}

function calculate() {
  try {
    let result = eval(currentDisplay.textContent);
    previousResult = result;
    historyDisplay.textContent = currentDisplay.textContent + " =";
    currentDisplay.textContent = result;
  } catch {
    currentDisplay.textContent = "Error";
  }
}

function getPreviousResult() {
  if (previousResult !== null) {
    currentDisplay.textContent += previousResult;
  }
}

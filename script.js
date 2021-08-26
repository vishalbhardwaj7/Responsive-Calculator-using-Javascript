// Get the instance of calc Area , Operands and Operations and other buttons
const calcArea = document.getElementById("calculationArea");
const operandsAndOperators = document.querySelectorAll(
  ".operands>div,.operator"
);
const equalsBtn = document.getElementById("equalsBtn");
const backspace = document.getElementById("backspace");
const clearBtn = document.getElementById("clear");

// Set event listeners on operands and operators
for (element of operandsAndOperators) {
  element.addEventListener("click", addOperandsToScreen);
}

//Set event Listener on Equal button
equalsBtn.addEventListener("click", calculateAnswer);

//Set event listener on backspace Button
backspace.addEventListener("click", () => {
  calcArea.value = calcArea.value.substring(0, calcArea.value.length - 1);
});

//Set event listener on ClearBtn
clearBtn.addEventListener("click", clearScreen);

//Add 0 to 9 and operators on screen
function addOperandsToScreen(e) {
  if (calcArea.value == "ADD SOME CALCULATION FIRST") {
    calcArea.value = "";
  }
  calcArea.value += e.target.innerText;
}

//Clear Screen Functions
function clearScreen() {
  calcArea.value = "";
}

//Calculate answer
function calculateAnswer() {
  if (calcArea.value == "") {
    calcArea.value = "ADD SOME CALCULATION FIRST";
  } else {
    let x = calcArea.value;
    calcArea.value = "";
    calcArea.value = eval(x);
  }
}

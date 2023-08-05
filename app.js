const theme = document.querySelectorAll(".theme-dark");
const buttons = document.querySelectorAll(".buttons");
const buttonsContainer = document.querySelector(".buttons-container");
const screen = document.querySelector(".screen");
const themeToogle = document.querySelector(".theme-toggle");
const resetButton = document.getElementById("reset");
const equalsButton = document.getElementById("equals");
const delButton = document.getElementById("del");
const screenNumber = document.querySelector(".screen-text");
const screenOperation = document.querySelector(".screen-operation");
const attLinks = document.querySelectorAll('.attribution-links');
const attSpans = document.querySelectorAll('.attribution-span');
let result;
let firstArgument;
let secondArgument;
let operation = true;

function themeMode1() {
  document.body.style.backgroundColor = "hsl(222, 26%, 31%)";
  buttons.forEach((button) => {
    button.style.color = "hsl(221, 14%, 31%)";
    button.style.backgroundColor = "hsl(30, 25%, 89%)";
    button.style.boxShadow =
      "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, hsl(28, 16%, 65%) 0px -5px 0px inset";
  });
  buttonsContainer.style.backgroundColor = "hsl(223, 31%, 20%)";
  screen.style.backgroundColor = "hsl(224, 36%, 15%)";
  theme.forEach((element) => {
    element.style.color = "hsl(0, 0%, 100%)";
  });
  themeToogle.style.backgroundColor = "hsl(223, 31%, 20%)";
  resetButton.style.backgroundColor = "hsl(225, 21%, 49%)";
  delButton.style.backgroundColor = "hsl(225, 21%, 49%)";
  equalsButton.style.backgroundColor = "hsl(6, 63%, 50%)";
  resetButton.style.color = "hsl(0, 0%, 100%)";
  delButton.style.color = "hsl(0, 0%, 100%)";
  equalsButton.style.color = "hsl(0, 0%, 100%)";
  resetButton.style.boxShadow =
    "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, hsl(224, 28%, 35%) 0px -5px 0px inset";
  equalsButton.style.boxShadow =
    "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, hsl(6, 70%, 34%) 0px -5px 0px inset";
  delButton.style.boxShadow =
    "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, hsl(224, 28%, 35%) 0px -5px 0px inset";
  screenOperation.style.color = "hsl(0, 0%, 100%)";
  attLinks.forEach((element) => {
    element.style.color = "hsl(6, 63%, 50%)";
  });
  attSpans.forEach((element) => {
    element.style.color = "hsl(28, 16%, 65%)";
  });
}

function themeMode2() {
  document.body.style.backgroundColor = "hsl(0, 0%, 90%)";
  buttons.forEach((button) => {
    button.style.color = "hsl(60, 10%, 19%)";
    button.style.backgroundColor = "hsl(45, 7%, 89%)";
    button.style.boxShadow =
      "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, hsl(35, 11%, 61%) 0px -5px 0px inset";
  });
  buttonsContainer.style.backgroundColor = "hsl(0, 5%, 81%)";
  screen.style.backgroundColor = "hsl(0, 0%, 93%)";
  theme.forEach((element) => {
    element.style.color = "hsl(60, 10%, 19%)";
  });
  themeToogle.style.backgroundColor = "hsl(0, 5%, 81%)";
  resetButton.style.backgroundColor = "hsl(185, 42%, 37%)";
  delButton.style.backgroundColor = "hsl(185, 42%, 37%)";
  equalsButton.style.backgroundColor = "hsl(25, 98%, 40%)";
  resetButton.style.color = "hsl(0, 0%, 100%)";
  delButton.style.color = "hsl(0, 0%, 100%)";
  equalsButton.style.color = "hsl(0, 0%, 100%)";
  resetButton.style.boxShadow =
    "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, hsl(185, 58%, 25%) 0px -5px 0px inset";
  equalsButton.style.boxShadow =
    "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, hsl(25, 99%, 27%) 0px -5px 0px inset";
  delButton.style.boxShadow =
    "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, hsl(185, 58%, 25%) 0px -5px 0px inset";
  screenOperation.style.color = "hsl(60, 10%, 19%)";
  attLinks.forEach((element) => {
    element.style.color = "hsl(6, 63%, 50%)";
  });
  attSpans.forEach((element) => {
    element.style.color = "hsl(60, 10%, 19%)";
  });
}

function themeMode3() {
  document.body.style.backgroundColor = "hsl(268, 75%, 9%)";
  buttons.forEach((button) => {
    button.style.color = "hsl(52, 100%, 62%)";
    button.style.backgroundColor = "hsl(268, 47%, 21%)";
    button.style.boxShadow =
      "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, hsl(290, 70%, 36%) 0px -5px 0px inset";
  });
  buttonsContainer.style.backgroundColor = "hsl(268, 71%, 12%)";
  screen.style.backgroundColor = "hsl(268, 71%, 12%)";
  theme.forEach((element) => {
    element.style.color = "hsl(52, 100%, 62%)";
  });
  themeToogle.style.backgroundColor = "hsl(268, 71%, 12%)";
  resetButton.style.backgroundColor = "hsl(281, 89%, 26%)";
  delButton.style.backgroundColor = "hsl(281, 89%, 26%)";
  equalsButton.style.backgroundColor = "hsl(176, 100%, 44%)";
  resetButton.style.color = "hsl(0, 0%, 100%)";
  delButton.style.color = "hsl(0, 0%, 100%)";
  equalsButton.style.color = "hsl(198, 20%, 13%)";
  resetButton.style.boxShadow =
    "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, hsl(285, 91%, 52%) 0px -5px 0px inset";
  equalsButton.style.boxShadow =
    "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, hsl(177, 92%, 70%) 0px -5px 0px inset";
  delButton.style.boxShadow =
    "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, hsl(285, 91%, 52%) 0px -5px 0px inset";
  screenOperation.style.color = "hsl(52, 100%, 62%)";
  attLinks.forEach((element) => {
    element.style.color = "hsl(176, 100%, 44%)";
  });
  attSpans.forEach((element) => {
    element.style.color = "hsl(52, 100%, 62%)";
  });
}

function insertNumber(event) {
  const clickedNumber = event.target;

  if (checkOperation()) {
    if (screenNumber.textContent === "0" || operation) {
      screenNumber.textContent = clickedNumber.textContent;
      secondArgument = Number(screenNumber.textContent);
      operation = false;
    } else {
      if (screenNumber.textContent.length < 10) {
        screenNumber.textContent =
          screenNumber.textContent + clickedNumber.textContent;
        secondArgument = Number(screenNumber.textContent);
      }
    }
  } else {
    if (screenNumber.textContent === "0") {
      screenNumber.textContent = clickedNumber.textContent;
      firstArgument = Number(screenNumber.textContent);
    } else {
      if (screenNumber.textContent.length < 10) {
        screenNumber.textContent =
          screenNumber.textContent + clickedNumber.textContent;
        firstArgument = Number(screenNumber.textContent);
      }
    }
  }
  adjustFontSize();
}

function del() {
  if (checkOperation()) {
    if (screenNumber.textContent.length > 1) {
      screenNumber.textContent = screenNumber.textContent.substring(
        0,
        screenNumber.textContent.length - 1
      );
      secondArgument = Number(screenNumber.textContent);
    } else {
      screenNumber.textContent = "0";
      secondArgument = Number(screenNumber.textContent);
    }
  } else {
    if (screenNumber.textContent.length > 1) {
      screenNumber.textContent = screenNumber.textContent.substring(
        0,
        screenNumber.textContent.length - 1
      );
      firstArgument = Number(screenNumber.textContent);
    } else {
      screenNumber.textContent = "0";
      firstArgument = Number(screenNumber.textContent);
    }
  }
  adjustFontSize();
}

function reset() {
  screenOperation.textContent = "";
  screenNumber.textContent = "0";
  firstArgument = 0;
  secondArgument = 0;
  adjustFontSize();
}

function equals() {
  if (screenOperation.textContent.includes("+")) {
    result = firstArgument + secondArgument;
    screenOperation.textContent =
      firstArgument + " + " + secondArgument + " = ";
    screenNumber.textContent = result;
    firstArgument = result;
  }

  if (screenOperation.textContent.includes("/")) {
    result = firstArgument / secondArgument;
    screenOperation.textContent =
      firstArgument + " / " + secondArgument + " = ";
    screenNumber.textContent = result;
    firstArgument = result;
  }

  if (screenOperation.textContent.includes("*")) {
    result = firstArgument * secondArgument;
    screenOperation.textContent =
      firstArgument + " * " + secondArgument + " = ";
    screenNumber.textContent = result;
    firstArgument = result;
  }

  if (screenOperation.textContent.includes("-")) {
    result = firstArgument - secondArgument;
    screenOperation.textContent =
      firstArgument + " - " + secondArgument + " = ";
    screenNumber.textContent = result;
    firstArgument = result;
  }
  adjustFontSize();
}

// math operation

function plus() {
  screenOperation.textContent = firstArgument + " + ";
  operation = true;
  if (!secondArgument) {
    secondArgument = firstArgument;
  } else {
    result = firstArgument + secondArgument;
    screenOperation.textContent = firstArgument + " + " + secondArgument;
    screenNumber.textContent = result;
    firstArgument = result;
  }
  adjustFontSize();
}

function minus() {
  screenOperation.textContent = firstArgument + " - ";
  operation = true;
  if (!secondArgument) {
    secondArgument = firstArgument;
  } else {
    result = firstArgument - secondArgument;
    screenOperation.textContent = firstArgument + " - " + secondArgument;
    screenNumber.textContent = result;
    firstArgument = result;
  }
  adjustFontSize();
}

function times() {
  screenOperation.textContent = firstArgument + " * ";
  operation = true;
  if (!secondArgument) {
    secondArgument = firstArgument;
  } else {
    result = firstArgument * secondArgument;
    screenOperation.textContent = firstArgument + " * " + secondArgument;
    screenNumber.textContent = result;
    firstArgument = result;
  }
  adjustFontSize();
}

function obelus() {
  screenOperation.textContent = firstArgument + " / ";
  operation = true;
  if (!secondArgument) {
    secondArgument = firstArgument;
  } else {
    result = firstArgument / secondArgument;
    screenOperation.textContent = firstArgument + " / " + secondArgument;
    screenNumber.textContent = result;
    firstArgument = result;
  }
  adjustFontSize();
}

// function that checks if an operation was clicked

function checkOperation() {
  if (
    screenOperation.textContent.includes("+") ||
    screenOperation.textContent.includes("/") ||
    screenOperation.textContent.includes("*") ||
    screenOperation.textContent.includes("-")
  ) {
    return true;
  } else {
    return false;
  }
}

function decimalNumber() {
  if (!screenNumber.textContent.includes(".")) {
    screenNumber.textContent = screenNumber.textContent + ".";
  }
  adjustFontSize();
}

//responsive font size when the number starts to get out of the container

function adjustFontSize() {
  if (window.innerWidth < 1000) {
    let fontSize = 40;
    screenNumber.style.fontSize = fontSize + "px";
    console.log(screenNumber.textContent.length);

    if (screenNumber.textContent.length > 10) {
      fontSize = fontSize - 10;
      screenNumber.style.fontSize = fontSize + "px";
    }
    if (screenNumber.textContent.length > 16) {
      fontSize = fontSize - 7;
      screenNumber.style.fontSize = fontSize + "px";
    }
  } else {
    let fontSize = 55;
    screenNumber.style.fontSize = fontSize + "px";
    console.log(screenNumber.textContent.length);

    if (screenNumber.textContent.length > 10) {
      fontSize = fontSize - 10;
      screenNumber.style.fontSize = fontSize + "px";
    }
    if (screenNumber.textContent.length > 16) {
      fontSize = fontSize - 7;
      screenNumber.style.fontSize = fontSize + "px";
    }
  }
}

//Trigger font adjust size on resize window

window.addEventListener("load", function () {
  window.dispatchEvent(new Event("resize"));
});

window.onresize = function () {
  adjustFontSize();
};

//on page loading font size and theme

window.onload = function init() {
  adjustFontSize();
  themeMode1();
};

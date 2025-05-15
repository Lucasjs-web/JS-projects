let calculation = "";

let memory = "";

/* Adds a random number between 0 and 9 to the current calculation. */

function randomdigit() {
  const digit = Math.floor(Math.random() * 9) + 1;
  updateCalculation(String(digit));
}

/* Displays the current calculation to the website. */

function calcamount() {
  document.querySelector("#calc").textContent = `${calculation}`;
}

/* Updates the current calculation with a number or operator. */

function updateCalculation(value) {
  if (calculation === "Error" || calculation === "0") {
    calculation = "";
  }
  calculation += value;
  calcamount();
}

/* Shows the result of a calculation. */

function calculationResult() {
  try {
    if (calculation !== "Error") {
      calculation = String(math.evaluate(calculation));
    }
  } catch (error) {
    calculation = "Error";
  }
  calcamount();
}

/* Rounds the value to two decimals. */

function calculationRounder() {
  if (typeof calculation === "string") {
    calculation = String(math.round(Number(calculation), 2));
    calcamount();
  }
}

/* Does the absolute math formula. */

function absolute() {
  try {
    if (calculation !== "Error") {
      calculation = String(math.abs(math.evaluate(calculation)));
    }
  } catch (error) {
    calculation = "Error";
  }
  calculationRounder();
  calcamount();
}

/* Does the expodential math formula. */

function expodential() {
  try {
    if (calculation !== "Error") {
      calculation = String(math.exp(calculation));
    }
  } catch (error) {
    calculation = "Error";
  }
  calculationRounder();
  calcamount();
}

/* Does the power math formula. */

function power() {
  try {
    if (calculation !== "Error") {
      calculation = String(math.pow(calculation, calculation));
    }
  } catch (error) {
    calculation = "Error";
  }
  calculationRounder();
  calcamount();
}

/* Does the divide amount math formula. */

function divAmt() {
  try {
    if (calculation !== "Error") {
      calculation = String(math.log2(calculation));
    }
  } catch (error) {
    calculation = "Error";
  }
  calculationRounder();
  calcamount();
}

/* Does the root math formula. */

function root() {
  try {
    if (calculation !== "Error") {
      calculation = String(math.nthRoot(calculation));
    }
  } catch (error) {
    calculation = "Error";
  }
  calculationRounder();
  calcamount();
}

/* Gives values depending on keyboard press. */

document.addEventListener("keydown", (event) => {
  const key = event.key;

  if ("0123456789+-*/().".includes(key)) {
    updateCalculation(key);
  }

  if (key == "Enter") {
    calculationResult();
  }

  if (key == "Backspace") {
    calculation = calculation.slice(0, -1);
    calcamount();
  }

  if (key == "Escape") {
    calculation = "0";
    calcamount();
  }

  if (key == "r") {
    randomdigit();
  }

  if (key == "s") {
    calculation = math.square(calculation);
    calcamount();
  }
});

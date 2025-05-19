let calculation = "";

function counterChange(value) {
  calculation += value;
  calcamount();
}
function calcamount() {
  document.querySelector("#counter-h1").textContent = `${calculation}`;
}

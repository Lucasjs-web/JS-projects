const incorrectBtn = document.getElementById("choiceBtnn");
const correctBtn = document.getElementById("choiceBtny");
const badEnding = document.getElementById("goPlay");
const firstMessage = document.getElementById("question");
const winDiv = document.getElementById("winDiv");
const goodgood = document.getElementById("goodgood");
const badbad = document.getElementById("badbad");

const submitBtn = document.getElementById("submission");

const badAudio = new Audio("Wrong Buzzer - Sound Effect.mp3");
const goodAudio = new Audio("Victory Sound Effect.mp3");

const incorrect = () => {
  badEnding.classList.remove("hidden");
  incorrectBtn.classList.add("hidden");
  correctBtn.classList.add("hidden");
  badAudio.play();
};

incorrectBtn.addEventListener("click", incorrect);

const correct = () => {
  winDiv.classList.remove("hidden");
  firstMessage.classList.add("hidden");
  incorrectBtn.classList.add("hidden");
  correctBtn.classList.add("hidden");
  goodAudio.play();
};

correctBtn.addEventListener("click", correct);

const valueCheck = () => {
  const input = document.getElementById("inputomg");
  const value = input.value;
  const number = Number(value);
  if (number < 2) {
    winDiv.classList.add("hidden");
    badbad.classList.remove("hidden");
    badAudio.play();
  } else {
    winDiv.classList.add("hidden");
    goodgood.classList.remove("hidden");
    goodAudio.play();
  }
};

submitBtn.addEventListener("click", valueCheck);

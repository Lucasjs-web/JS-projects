const navElement = document.querySelector("nav");
const navBarLinks = document.querySelectorAll("a");
const sectionElements = document.querySelectorAll("section");

const removeActiveLinks = () => {
  navBarLinks.forEach((link) => link.parentElement.classList.remove("active"));
};

const hideSections = () => {
  sectionElements.forEach((section) => section.classList.add("hidden"));
};

navBarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    removeActiveLinks();
    hideSections();
    link.parentElement.classList.add("active");
    const sectionElement = document.querySelector(link.hash);
    sectionElement.classList.remove("hidden");
  });
});

function fortnite() {
  let audio = new Audio("Fortnite Victory Royale Sound Effect (HD).mp3");

  let audio2 = new Audio("Record (online-voice-recorder.com).mp3");

  let omgHidden = document.getElementById("omgFortnite");

  omgHidden.classList.remove("hidden");

  audio.play();
  audio2.play();
}

function fortnite() {
  if (document.getElementById("omgFortnite").classList.contains("hidden")) {
    let audio = new Audio("Skeletor running and laughing (Short Version).mp3");
    audio.play();
    document.getElementById("omgFortnite").classList.remove("hidden");
  } else {
    let audio2 = new Audio("Press the damn button.mp3");
    audio2.play();
  }
}

const lvlNumber = document.getElementById("level_number");

const soulsNumber = document.getElementById("souls_total");

const lvlUpAmount = document.getElementById("lvlup_amount");

const vigorNumber = document.getElementById("vig_level");

const enduNumber = document.getElementById("endu_level");

let currentLevel = 0;

let currentSoulsTotal = 0;

let currentLevelUpAmount = 0;

let currentVigor = 0;

let currentEndu = 0;

function statsDisplayUpdate() {
  vigorNumber.innerHTML = vigor[currentVigor];
  enduNumber.innerHTML = endurance[currentEndu];
}

function displayUpdate() {
  lvlNumber.innerHTML = levels[currentLevel];
  soulsNumber.innerHTML = soulsTotal[currentSoulsTotal];
  lvlUpAmount.innerHTML = levelUpAmount[currentLevelUpAmount];
}

function levelUp() {
  currentLevel++;
  currentSoulsTotal++;
  currentLevelUpAmount++;
  displayUpdate();
}

function levelDown() {
  currentLevel--;
  currentSoulsTotal--;
  currentLevelUpAmount--;

  displayUpdate();
}

function vigorUp() {
  if (currentVigor != 93) {
    currentVigor++;
    statsDisplayUpdate();
    displayUpdate();
    levelUp();
  }
}

function vigorDown() {
  if (currentVigor > 0) {
    currentVigor--;
    statsDisplayUpdate();
    displayUpdate();
    levelDown();
  }
}

function enduUp() {
  if (currentEndu != 93) {
    currentEndu++;
    statsDisplayUpdate();
    displayUpdate();
    levelUp();
  }
}

function enduDown() {
  if (currentEndu > 0) {
    currentEndu--;
    statsDisplayUpdate();
    displayUpdate();
    levelDown();
  }
}

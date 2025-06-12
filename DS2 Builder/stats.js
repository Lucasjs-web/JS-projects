const lvlNumber = document.getElementById("level_number");

const soulsNumber = document.getElementById("souls_total");

const lvlUpAmount = document.getElementById("lvlup_amount");

const vigorNumber = document.getElementById("vig_level");

const enduNumber = document.getElementById("endu_level");

const vitNumber = document.getElementById("vit_level");

const attuNumber = document.getElementById("attu_level");

const strNumber = document.getElementById("str_level");

const dexNumber = document.getElementById("dex_level");

const adaNumber = document.getElementById("ada_level");

const intNumber = document.getElementById("int_level");

const fthNumber = document.getElementById("fth_level");

let currentLevel = 0;

let currentSoulsTotal = 0;

let currentLevelUpAmount = 0;

let currentVigor = 0;

let currentEndu = 0;

let currentVit = 0;

let currentAttu = 0;

let currentStr = 0;

let currentDex = 0;

let currentAda = 0;

let currentInt = 0;

let currentFth = 0;

function statsDisplayUpdate() {
  vigorNumber.innerHTML = vigor[currentVigor];
  enduNumber.innerHTML = endurance[currentEndu];
  vitNumber.innerHTML = vitality[currentVit];
  attuNumber.innerHTML = attunement[currentAttu];
  strNumber.innerHTML = strength[currentStr];
  dexNumber.innerHTML = dexterity[currentDex];
  adaNumber.innerHTML = adaptability[currentAda];
  intNumber.innerHTML = intelligence[currentInt];
  fthNumber.innerHTML = faith[currentFth];
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

function vitUp() {
  if (currentVit != 93) {
    currentVit++;
    statsDisplayUpdate();
    displayUpdate();
    levelUp();
  }
}

function vitDown() {
  if (currentVit > 0) {
    currentVit--;
    statsDisplayUpdate();
    displayUpdate();
    levelDown();
  }
}

function attuUp() {
  if (currentAttu != 93) {
    currentAttu++;
    statsDisplayUpdate();
    displayUpdate();
    levelUp();
  }
}

function attuDown() {
  if (currentAttu > 0) {
    currentAttu--;
    statsDisplayUpdate();
    displayUpdate();
    levelDown();
  }
}

function strUp() {
  if (currentStr != 93) {
    currentStr++;
    statsDisplayUpdate();
    displayUpdate();
    levelUp();
  }
}

function strDown() {
  if (currentStr > 0) {
    currentStr--;
    statsDisplayUpdate();
    displayUpdate();
    levelDown();
  }
}

function dexUp() {
  if (currentDex != 93) {
    currentDex++;
    statsDisplayUpdate();
    displayUpdate();
    levelUp();
  }
}

function dexDown() {
  if (currentDex > 0) {
    currentDex--;
    statsDisplayUpdate();
    displayUpdate();
    levelDown();
  }
}

function adaUp() {
  if (currentAda != 93) {
    currentAda++;
    statsDisplayUpdate();
    displayUpdate();
    levelUp();
  }
}

function adaDown() {
  if (currentAda > 0) {
    currentAda--;
    statsDisplayUpdate();
    displayUpdate();
    levelDown();
  }
}

function intUp() {
  if (currentInt != 93) {
    currentInt++;
    statsDisplayUpdate();
    displayUpdate();
    levelUp();
  }
}

function intDown() {
  if (currentInt > 0) {
    currentInt--;
    statsDisplayUpdate();
    displayUpdate();
    levelDown();
  }
}

function fthUp() {
  if (currentFth != 93) {
    currentFth++;
    statsDisplayUpdate();
    displayUpdate();
    levelUp();
  }
}

function fthDown() {
  if (currentFth > 0) {
    currentFth--;
    statsDisplayUpdate();
    displayUpdate();
    levelDown();
  }
}

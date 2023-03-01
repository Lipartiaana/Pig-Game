const firstPlayer = document.getElementById("first-player");
const secondPlayer = document.getElementById("second-player");
const newGameBtn = document.getElementById("new-game");
const rollDiceBtn = document.getElementById("roll-dice");
const holdBtn = document.getElementById("hold");
const firstPlayerTotalScoreEl = document.getElementById("total-score-first");
const secondPlayerTotalScoreEl = document.getElementById("total-score-second");
const firstPlayerCurrentScoreEl = document.getElementById(
  "current-score-first"
);
const secondPlayerCurrentScoreEl = document.getElementById(
  "current-score-second"
);
const dice = document.getElementById("dice");

const imageArr = [
  "dice-1.png",
  "dice-2.png",
  "dice-3.png",
  "dice-4.png",
  "dice-5.png",
  "dice-6.png",
];

let firstPlayerTotalScore = 0;
let secondPlayerTotalScore = 0;
let firstPlayerCurrentScore = 0;
let secondPlayerCurrentScore = 0;

firstPlayerCurrentScoreEl.textContent = firstPlayerCurrentScore;

newGameBtn.addEventListener("click", restart);
rollDiceBtn.addEventListener("click", roll);
holdBtn.addEventListener("click", hold);

function getRandomImage() {
  random_index = Math.floor(Math.random() * imageArr.length);
  selected_image = imageArr[random_index];
  dice.src = `./images/${selected_image}`;
}

function displayScore(score) {
  if (firstPlayer.classList.contains("active-player")) {
    firstPlayerCurrentScore += score;
    firstPlayerCurrentScoreEl.textContent = firstPlayerCurrentScore;
  } else {
    secondPlayerCurrentScore += score;
    secondPlayerCurrentScoreEl.textContent = secondPlayerCurrentScore;
  }
}

function changePlayer() {
  if (firstPlayer.classList.contains("active-player")) {
    firstPlayer.classList.remove("active-player");
    secondPlayer.classList.add("active-player");
    firstPlayerCurrentScore = 0;
    firstPlayerCurrentScoreEl.textContent = firstPlayerCurrentScore;
  } else {
    secondPlayer.classList.remove("active-player");
    firstPlayer.classList.add("active-player");
    secondPlayerCurrentScore = 0;
    secondPlayerCurrentScoreEl.textContent = secondPlayerCurrentScore;
  }
}

function roll() {
  getRandomImage();
  dice.classList.add("visible");
  if (selected_image == `dice-1.png`) {
    changePlayer();
  } else if (selected_image == `dice-2.png`) {
    displayScore(2);
  } else if (selected_image == `dice-3.png`) {
    displayScore(3);
  } else if (selected_image == `dice-4.png`) {
    displayScore(4);
  } else if (selected_image == `dice-5.png`) {
    displayScore(5);
  } else if (selected_image == `dice-6.png`) {
    displayScore(6);
  }
}

function hold() {
  if (firstPlayer.classList.contains("active-player")) {
    firstPlayerTotalScore += firstPlayerCurrentScore;
    firstPlayerTotalScoreEl.textContent = firstPlayerTotalScore;
    if (firstPlayerTotalScore >= 100) {
      firstPlayerTotalScoreEl.textContent = "You Win!";
      firstPlayerCurrentScoreEl.textContent = "0";
      secondPlayerTotalScoreEl.textContent = "0";
      rollDiceBtn.disabled = true;
      holdBtn.disabled = true;
    } else {
      changePlayer();
    }
  } else {
    secondPlayerTotalScore += secondPlayerCurrentScore;
    secondPlayerTotalScoreEl.textContent = secondPlayerTotalScore;
    if (secondPlayerTotalScore >= 100) {
      secondPlayerTotalScoreEl.textContent = "You Win!";
      secondPlayerCurrentScoreEl.textContent = "0";
      firstPlayerTotalScoreEl.textContent = "0";
      rollDiceBtn.disabled = true;
      holdBtn.disabled = true;
    } else {
      changePlayer();
    }
  }
}

function restart() {
  firstPlayerTotalScore = 0;
  secondPlayerTotalScore = 0;
  firstPlayerCurrentScore = 0;
  secondPlayerCurrentScore = 0;
  firstPlayerTotalScoreEl.textContent = firstPlayerTotalScore;
  firstPlayerCurrentScoreEl.textContent = firstPlayerCurrentScore;
  secondPlayerTotalScoreEl.textContent = secondPlayerTotalScore;
  secondPlayerCurrentScoreEl.textContent = secondPlayerCurrentScore;
  dice.classList.remove("visible");
  rollDiceBtn.disabled = false;
  holdBtn.disabled = false;
  if (secondPlayer.classList.contains("active-player")) {
    secondPlayer.classList.remove("active-player");
    firstPlayer.classList.add("active-player");
  }
}

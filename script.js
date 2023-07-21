const score = {
  win: 0,
  loss: 0,
  tie: 0,
};
function resetting() {
  score.win = 0;
  score.loss = 0;
  score.tie = 0;
  document.querySelector(".winning").innerHTML = ``;
  document.querySelector(".move-button").innerHTML = ``;
  document.querySelector(
    ".scoreBoard"
  ).innerHTML = `wins=${score.win},losses=${score.loss},ties=${score.tie}`;
}
function player(Move) {
  let result = "";

  compMove();
  if (Move === "Stone") {
    if (computerMove === "Stone") {
      document.querySelector(
        ".move-button"
      ).innerHTML = `You <img class="picks" src="ImageForGame/rock-emoji.png"> <img class="picks" src="ImageForGame/rock-emoji.png"> Computer`;
      result = "tie";
    } else if (computerMove === "Paper") {
      document.querySelector(
        ".move-button"
      ).innerHTML = `You <img class="picks" src="ImageForGame/rock-emoji.png"> <img class="picks" src="ImageForGame/paper-emoji.png"> Computer`;
      result = "You Lose";
    } else {
      document.querySelector(
        ".move-button"
      ).innerHTML = `You <img class="picks" src="ImageForGame/rock-emoji.png"> <img class="picks" src="ImageForGame/scissors-emoji.png"> Computer`;
      result = "You Win";
    }
  } else if (Move === "Scissor") {
    if (computerMove === "Stone") {
      document.querySelector(
        ".move-button"
      ).innerHTML = `You <img class="picks" src="ImageForGame/scissors-emoji.png"> <img class="picks" src="ImageForGame/rock-emoji.png"> Computer`;
      result = "You Lose";
    } else if (computerMove === "Paper") {
      document.querySelector(
        ".move-button"
      ).innerHTML = `You <img class="picks" src="ImageForGame/scissors-emoji.png"> <img class="picks" src="ImageForGame/paper-emoji.png"> Computer`;
      result = "You Win";
    } else {
      document.querySelector(
        ".move-button"
      ).innerHTML = `You <img class="picks" src="ImageForGame/scissors-emoji.png"> <img class="picks" src="ImageForGame/scissors-emoji.png"> Computer`;
      result = "Tie";
    }
  } else {
    if (computerMove === "Stone") {
      document.querySelector(
        ".move-button"
      ).innerHTML = `You <img class="picks" src="ImageForGame/paper-emoji.png"> <img class="picks" src="ImageForGame/rock-emoji.png"> Computer`;
      result = "You Win";
    } else if (computerMove === "Paper") {
      document.querySelector(
        ".move-button"
      ).innerHTML = `You <img class="picks" src="ImageForGame/paper-emoji.png"> <img class="picks" src="ImageForGame/paper-emoji.png"> Computer`;
      result = "Tie";
    } else {
      document.querySelector(
        ".move-button"
      ).innerHTML = `You <img class="picks" src="ImageForGame/paper-emoji.png"> <img class="picks" src="ImageForGame/scissors-emoji.png"> Computer`;
      result = "You Lose";
    }
  }
  if (result === "You Win") {
    document.querySelector(".winning").innerHTML = `You Win`;
    score.win++;
  } else if (result === "You Lose") {
    document.querySelector(".winning").innerHTML = `You Lose`;
    score.loss++;
  } else {
    document.querySelector(".winning").innerHTML = `Game Ties`;
    score.tie++;
  }
  document.querySelector(
    ".scoreBoard"
  ).innerHTML = `wins=${score.win},losses=${score.loss},ties=${score.tie}`;
  if (score.win === 5) {
    alert(`You won for ${score.win} times`);
    resetting();
    alert(`You wins against Machine :)`);
  }
  if (score.loss === 5) {
    alert(`You loss for ${score.loss} times`);
    resetting();
    alert(`You Loss to the Machine :|`);
  }
  if (score.tie === 5) {
    resetting();
    alert(`Well Play.But Try Again.Game tie`);
  }
}
let computerMove = "";
function compMove() {
  let compMove = Math.random();
  if (compMove < 1 / 3) {
    computerMove = "Stone";
  } else if (compMove < 2 / 3) {
    computerMove = "Paper";
  } else {
    computerMove = "Scissor";
  }
}

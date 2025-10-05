var cpuChoice;
var playerNumber;
var result;
var playerScore = 0;
var cpuScore = 0;
var bgMusic = new Audio("./sounds/bgmusic.mp3");
bgMusic.loop = true;
var bgMusicStatus = false;

for (var i = 0; i < 3; i++) {
  document.querySelectorAll(".choices-container img")[i].addEventListener("click", function () {
    var playerChoice = this.classList[1];
    playerChoiceLogic(playerChoice);
    cpuChoiceLogic();
    gameLogic();
    updateScore();
  });
}

function playerChoiceLogic(choice) {
  document.querySelector(".image-wrapper.player-img img").setAttribute("src", "./images/" + choice + ".svg");

  var choices = { rock: 0, paper: 1, scissor: 2 };
  playerNumber = choices[choice];
}

function cpuChoiceLogic() {
  cpuChoice = Math.floor(Math.random() * 3);
  var imageList = ["rock", "paper", "scissor"];
  document.querySelector(".image-wrapper.cpu-img img").setAttribute("src", "./images/" + imageList[cpuChoice] + ".svg");
}

function gameLogic() {
  result = (playerNumber - cpuChoice + 3) % 3;
  if (result == 1) {
    document.querySelector("h1").innerHTML = "Player Wins!";
  } else if (result == 2) {
    document.querySelector("h1").innerHTML = "CPU Wins";
  } else {
    document.querySelector("h1").innerHTML = "Tie!";
  }
}

function updateScore() {
  if (result == 1) {
    playerScore++;
    document.querySelector(".player p").innerHTML = playerScore;
  } else if (result == 2) {
    cpuScore++;
    document.querySelector(".cpu p").innerHTML = cpuScore;
  } else {
    document.querySelector(".player p").innerHTML = playerScore;
    document.querySelector(".cpu p").innerHTML = cpuScore;
  }
}

function restartScore() {
  document.querySelector(".restart-btn").addEventListener("click", function () {
    playerScore = 0;
    cpuScore = 0;
    document.querySelector("h1").innerHTML = "Rock Paper Scissors";
    document.querySelector(".player-score").innerHTML = playerScore;
    document.querySelector(".cpu-score").innerHTML = cpuScore;
  });
}

restartScore();

function playBackgroundMusic() {
  document.querySelector(".music-btn").addEventListener("click", function () {
    if (bgMusicStatus == false) {
      document.querySelector(".music-btn").setAttribute("src", "./images/music.svg");
      bgMusic.play();
      bgMusicStatus = true;
    } else {
      document.querySelector(".music-btn").setAttribute("src", "./images/mute.svg");
      bgMusic.pause();
      bgMusicStatus = false;
    }
  });
}

playBackgroundMusic();

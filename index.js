var cpuChoice;
var playerNumber;
var result;
var playerScore = 0;
var cpuScore = 0;

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

  if (choice == "rock") {
    playerNumber = 0;
  } else if (choice == "paper") {
    playerNumber = 1;
  } else {
    playerNumber = 2;
  }
}

function cpuChoiceLogic() {
  cpuChoice = Math.floor(Math.random() * 3);
  if (cpuChoice == 0) {
    document.querySelector(".image-wrapper.cpu-img img").setAttribute("src", "./images/rock.svg");
  } else if (cpuChoice == 1) {
    document.querySelector(".image-wrapper.cpu-img img").setAttribute("src", "./images/paper.svg");
  } else {
    document.querySelector(".image-wrapper.cpu-img img").setAttribute("src", "./images/scissor.svg");
  }
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

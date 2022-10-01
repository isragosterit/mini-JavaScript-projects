const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice, computerResult, result;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);
//selecting 1 or 2
function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 2) + 1;
  console.log(randomNumber);
  if (randomNumber == 1) {
    computerResult = "heads";
  } else {
    computerResult = "tails";
  }
  document.getElementById("output").innerHTML = computerResult;
}
//getting result of the game
function getResult() {
  if (userChoice === computerResult) {
    document.getElementById("result").innerHTML = "You Win!";
  } else {
    document.getElementById("result").innerHTML = "You Lost...";
  }
}

//console.log("hi");

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("Error. Invalid entry!");
  }
};

/*getUserChoice test
console.log(getUserChoice("Rock")); */

let randomNumber = Math.floor(Math.random() * 3);

const getComputerChoice = () => {
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else if (randomNumber === 2) {
    return "scissors";
  }
};

/*getComputerChoice test
console.log(`The AI chose ${getComputerChoice()}`); */

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "Tie game!";
  } else if (userChoice === "rock" && computerChoice === "paper") {
    return "You lost!";
  } else if (userChoice === "paper" && computerChoice === "scissors") {
    return "You lost!";
  } else if (userChoice === "scissors" && computerChoice === "rock") {
    return "You lost!";
  } else if (userChoice === "bomb") {
    return "You obliterated the AI!";
  } else {
    return "You won!";
  }
};

/*determineWinner test
console.log(determineWinner("scissors", "scissors")); */

function playGame() {
  userChoice = getUserChoice("bomb");
  computerChoice = getComputerChoice();
  console.log(`You chose ${userChoice}! The AI chose ${computerChoice}.`);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();

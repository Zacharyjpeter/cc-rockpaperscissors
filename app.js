console.log("hi");

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("Error. Invalid entry!");
  }
};

//output test
console.log(getUserChoice("rock"));

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

//output test
console.log(getComputerChoice);

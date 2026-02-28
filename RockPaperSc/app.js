const getUserInput = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    return console.log("Invalid choice!");
  }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === "1") {
    return "paper";
  } else {
    return "scissors";
  }
};

const determineWinner = (userInput, computerChoice) => {
  if (userInput === computerChoice) {
    return "The game is tie!";
  }

  // Secret chect code
  if (userInput === "bomb") {
    return "You won the game!";
  }

  if (userInput === "rock") {
    if (computerChoice === "paper") {
      return "Computer won!";
    } else {
      return "You Won!";
    }
  }
  if (userInput === "paper") {
    if (computerChoice === "scissors") {
      return "Computer Won!";
    } else {
      return "You won the game!";
    }
  }
  if (userInput === "scissors") {
    if (computerChoice === "rock") {
      return "Computer won!";
    } else {
      return "You won the game!";
    }
  }
};

const playGame = () => {
  const userChoice = getUserInput("rock"); // change to test
  const computerChoice = getComputerChoice();

  console.log("You chose:", userChoice);
  console.log("Computer chose:", computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
console.log("Hello");

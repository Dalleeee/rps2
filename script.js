function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    switch (randomNumber) {
        case 1: {
            return "Rock";
        }
        break;
        case 2: {
            return "Paper";
        }
        break;
        case 3: {
            return "Scissors";
        }
    }
}

function round(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    playerSelection = prompt ("Choose your weapon!").toLowerCase();
    switch (playerSelection) {
        case "rock": 
            if (computerSelection === "Rock") {
                return "Tie";
            }
            else if (computerSelection === "Paper") {
                return "Loss";
            }
            else {
                return "Win";
            }
        break;
        case "paper":
            if (computerSelection === "Rock") {
                return "Win";
            }
            else if (computerSelection === "Paper") {
                return "Tie";
            }
            else {
                return "Loss";
            }
        break;
        case "scissors":
            if (computerSelection === "Scissors") {
                return "Tie";
            }
            else if (computerSelection === "Paper") {
                return "Win";
            }
            else {
                return "Loss";
            }
        }
    }
    
function game() {
    let playerScore = 0;
    let computerScore = 0;
    while (playerScore < 5 && computerScore < 5) {
        let result = round();
        switch (result) {
            case "Win": 
            playerScore++;
            console.log("You won!")
            console.log("User score: " + playerScore); 
            console.log("Computer score: " + computerScore);
            break;
            case "Loss":
            computerScore++;
            console.log("You lost")
            console.log("User score: " + playerScore); 
            console.log("Computer score: " + computerScore);
            break;
            case "Tie":
            console.log("Tie!")
            console.log("User score: " + playerScore); 
            console.log("Computer score: " + computerScore);
    }
    }
    if (computerScore === 5) {
        return "You lost it all!";
    }
    else if (playerScore === 5) {
        return "You won it all!";
    }
    else {
        return "Keep going!";
    }
}
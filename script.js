const score = document.querySelector('#score');
const scoreText = document.createElement('p');
scoreText.textContent = "Can you take down the computer?";
let win = 0;
let loss = 0;
score.appendChild(scoreText);
const winCounter = document.getElementById('win');
const lossCounter = document.getElementById('loss');

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
    switch (playerSelection) {
        case "rock": 
            if (computerSelection === "Rock") {
                scoreText.textContent = "Tie";
            }
            else if (computerSelection === "Paper") {
                if (loss <= 4){
                    lossCounter.innerHTML = ++loss;
                    scoreText.textContent = "Computer stole it!";
                }
                else {
                    lossCounter.innerHTML = 0;
                    winCounter.innerHTML = 0;
                    scoreText.textContent = "You lost. Reload to try again.";
                }
            }
            else {
                if (win <= 4) {
                    winCounter.innerHTML = ++win;
                    scoreText.textContent = "You took that one!";
                }
                else {
                    lossCounter.innerHTML = 0;
                    winCounter.innerHTML = 0;
                    scoreText.textContent = "You won it all! Play again by reloading";
                }
            }
        break;
        case "paper":
            if (computerSelection === "Rock") {
                if (win <= 4) {
                    winCounter.innerHTML = ++win;
                    scoreText.textContent = "You took that one!";
                }
                else {
                    lossCounter.innerHTML = 0;
                    winCounter.innerHTML = 0;
                    scoreText.textContent = "You won it all! Play again by reloading";
                }
            }
            else if (computerSelection === "Paper") {
                scoreText.textContent = "Tie";
            }
            else {
                if (loss <= 4){
                    lossCounter.innerHTML = ++loss;
                    scoreText.textContent = "Computer stole it!";
                }
                else {
                    lossCounter.innerHTML = 0;
                    winCounter.innerHTML = 0;
                    scoreText.textContent = "You lost. Reload to try again.";
                }
            }
        break;
        case "scissors":
            if (computerSelection === "Scissors") {
                scoreText.textContent = "Tie";
            }
            else if (computerSelection === "Paper") {
                if (win <= 4) {
                    winCounter.innerHTML = ++win;
                    scoreText.textContent = "You took that one!";
                }
                else {
                    lossCounter.innerHTML = 0;
                    winCounter.innerHTML = 0;
                    scoreText.textContent = "You won it all! Play again by reloading";
                }
            }
            else {
                if (loss <= 4){
                    lossCounter.innerHTML = ++loss;
                    scoreText.textContent = "Computer stole it!";
                }
                else {
                    lossCounter.innerHTML = 0;
                    winCounter.innerHTML = 0;
                    scoreText.textContent = "You lost. Reload to try again.";
                }
            }
        }
}

const rockButton = document.querySelector('#rock');
rockButton.addEventListener('click', function(){
    round('rock', computerPlay());
})

const paperButton = document.querySelector('#paper');
paperButton.addEventListener('click', function(){
    round('paper', computerPlay());
})

const scissorsButton = document.querySelector('#scissors');
scissorsButton.addEventListener('click', function(){
    round('scissors', computerPlay());
})

const reset = document.getElementById('reset');
reset.addEventListener("click", reloadScreen);
function reloadScreen() {
    location.reload();
}
function genComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice = '';
    if (randomNumber == 0) {
        computerChoice = 'rock';
    }   else if (randomNumber == 1) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }
    return computerChoice;
}

let userChoice = ''

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        userChoice = button.textContent;
        playRound();
    });
});

const div = document.querySelector('div');
const header = document.querySelector('h1');

let userWins = 0;
let computerWins = 0;

function playRound() {
    let winner = ''
    while (winner != 'computer' || winner != 'user') {
        let computerChoice = genComputerChoice();
        console.log(userChoice);
        console.log(computerChoice);
        header.textContent = 'The computer chose ' + computerChoice;
        if (userChoice == computerChoice) {
            div.textContent = 'Tie, go again';
            continue;
        } else if (userChoice == 'rock' && computerChoice == 'scissors' || userChoice == 'paper' && computerChoice == 'rock' || userChoice == 'scissors' && computerChoice == 'paper') {
            winner = 'user';
            userWins += 1;
            div.textContent = 'You won! You are at ' + userWins + ' wins, and the computer is at ' + computerWins + ' wins.';
            return winner;
        } else {
            winner = 'computer';
            computerWins += 1;
            div.textContent = 'You lost. You are at ' + userWins + ' wins, and the computer is at ' + computerWins + ' wins.';
            return winner;
        }
    }
}





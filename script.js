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

function getUserChoice() {
    userChoice = '';
    while (userChoice != 'rock' || userChoice != 'paper' || userChoice != 'scissors') {
        userChoice = prompt("Please enter rock, paper or scissors.");
        if (userChoice == 'rock' || userChoice == 'paper' || userChoice == 'scissors') {
            return userChoice
        } else {
            console.log('You did not enter rock, paper or scissors');
        }
    }
}

let userWins = 0;
let computerWins = 0;

function playRound() {
    let winner = ''
    while (winner != 'computer' || winner != 'user') {
        let computerChoice = genComputerChoice();
        console.log('The computer chose ' + computerChoice);
        let userChoice = getUserChoice();
        if (userChoice == computerChoice) {
            console.log('Tie, go again');
            continue;
        } else if (userChoice == 'rock' && computerChoice == 'scissors' || userChoice == 'paper' && computerChoice == 'rock' || userChoice == 'scissors' && computerChoice == 'paper') {
            winner = 'user';
            userWins += 1;
            console.log('You won! You are at ' + userWins + ' wins, and the computer is at ' + computerWins + ' wins.');
        } else {
            winner = 'computer';
            computerWins += 1;
            console.log('You lost. You are at ' + userWins + ' wins, and the computer is at ' + computerWins + ' wins.');
            return winner;
        }
    }

}




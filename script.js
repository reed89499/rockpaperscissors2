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

one = genComputerChoice();
console.log(one);
two = getUserChoice();
console.log(two);

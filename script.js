let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    let random = Math.floor(Math.random() * 3);
    switch(random) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

const getHumanChoice = () => {
    let humanChoice = prompt('Choose: Rock, Paper, Scissors');
    return humanChoice.toLowerCase();
}


const playGame = () => {

    const playRound = (humanChoice, computerChoice) => {
        if (humanChoice === computerChoice){
            return console.log(`It's a tie, both a ${humanChoice}`)
        }
    
        if (humanChoice === 'paper' && computerChoice === 'rock' || humanChoice === 'rock' && computerChoice === 'scissors' || humanChoice === 'scissors' && computerChoice === 'paper') {
            humanScore++;
            return console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        } else {
            computerScore++;
            return console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        }
    }

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
}

const winnerResult = () => {
    if (humanScore > computerScore) {
        alert(`You win! Your score: ${humanScore}, Computer score: ${computerScore}`);
    } else {
        alert(`You lose! Your score: ${humanScore}, Computer score: ${computerScore}`);
    }
}

playGame();
playGame();
playGame();
playGame();
playGame();
winnerResult();
const container = document.querySelector('.container');
const result = document.querySelector('.result');
const bottomContainer = document.querySelector('.bottom-container');
const midContainer = document.querySelector('.mid-container');
const humanScoreUi = document.querySelector('.human-score-ui');
const computerScoreUi = document.querySelector('.computer-score-ui');

let humanScore = 0;
let computerScore = 0;
let finalScore = 5;


const getComputerChoice = () => {
    let random = Math.floor(Math.random() * 3);
    switch(random) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissor';
    }
}

const getHumanChoice = (humanChoice) => {
    setTimeout(winnerResult, 1);

    let computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        result.style.color = 'yellow';
        return result.textContent = `It's a tie! Both chooses ${computerChoice}`;
    }

    if (humanChoice === 'rock' && computerChoice === 'scissor' ||
        humanChoice === 'paper' && computerChoice === 'rock' ||
        humanChoice === 'scissor' && computerChoice === 'paper'
    ) {
        humanScore++;
        humanScoreUi.textContent = humanScore;
        result.style.color = '#006200';
        return result.textContent = `You WIN! ${humanChoice} beats ${computerChoice}`;
    } 

    computerScore++;
    computerScoreUi.textContent = computerScore;
    result.style.color = '#c10022';
    return result.textContent = `You LOSE! ${computerChoice} beats ${humanChoice}`;
}

const winnerResult = () => {

    if (humanScore >= finalScore) {
        humanScoreUi.style.color = 'white';
        humanScoreUi.textContent += ' Winner! 🏆';
        midContainer.style.display = 'none';
        setTimeout(() => {
            result.innerHTML = `<div onclick="reset()" class="reset">Reset</div>`
        }, 2000);
    }

    if (computerScore >= finalScore) {
        computerScoreUi.style.color = 'white';
        computerScoreUi.textContent += ' Winner! 🏆';
        midContainer.style.display = 'none';
        setTimeout(() => {
            result.innerHTML = `<div onclick="reset()" class="reset">Reset</div>`
        }, 2000);
    }

}

const reset = () => {
    const resetDiv = document.querySelector('.reset');
    resetDiv.style.display = 'none';
    humanScore = 0;
    computerScore = 0;
    humanScoreUi.textContent = humanScore;
    computerScoreUi.textContent = computerScore;
    humanScoreUi.style.color = 'black';
    computerScoreUi.style.color = 'black';
    midContainer.style.display = 'flex';
    return result.textContent = '';
}

container.addEventListener('click', (e) => {
    let humanChoice = e.target.textContent;

    switch(humanChoice) {
        case '🪨':
            return getHumanChoice('rock');
        case '📄':
            return getHumanChoice('paper');
        case '✂️':
            return getHumanChoice('scissor');
    }

})
const computerChoiceDisplay = document.getElementById("computerChoice")
const playerChoiceDisplay = document.getElementById("playerChoice")
const playerScore = document.getElementById("playerScore")
const computerScore = document.getElementById("computerScore")
const possibleChoices = document.querySelectorAll('.far')
const playerResultDisplay = document.getElementById('playerResult')
const computerResultDisplay = document.getElementById('computerResult')
let plScore = 0
let pcScore = 0

function randomComputerChoice() {
    randomNumber = Math.floor(Math.random() * possibleChoices.length)
    if (randomNumber === 0) {
        computerChoice = 'r'
    }
    if (randomNumber === 1) {
        computerChoice = 'p'
    }
    if (randomNumber === 2) {
        computerChoice = 's'
    }
}


possibleChoices.forEach(possibleChoice => {
    possibleChoice.addEventListener('click', (e) => {
        playerChoice = e.target.id
        randomComputerChoice()
        winner()
        playerChoiceDisplay.innerHTML = playerChoice;
        computerChoiceDisplay.innerHTML = computerChoice;

    })
})

function winner() {

    if (playerChoice == computerChoice) {
        playerResultDisplay.innerHTML = "Draw";
        computerResultDisplay.innerHTML = "Draw";
    } else if (playerChoice == 'r' & computerChoice == 's' || playerChoice == 'p' & computerChoice == 'r' || playerChoice == 's' & computerChoice == 'p') {
        playerResultDisplay.innerHTML = "Winner!"
        computerResultDisplay.innerHTML = "Loser!"
        plScore++
        playerScore.textContent = plScore

    } else {
        playerResultDisplay.innerHTML = "Loser!"
        computerResultDisplay.innerHTML = "Winner!"
        pcScore++
        computerScore.textContent = pcScore
    }
}
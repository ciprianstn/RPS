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
        computerChoice = 'Rock'
    }
    if (randomNumber === 1) {
        computerChoice = 'Paper'
    }
    if (randomNumber === 2) {
        computerChoice = 'Scissors'
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
        playerResultDisplay.style.color = '#595959'
        computerResultDisplay.style.color = '#595959'

    } else if (playerChoice == 'Rock' & computerChoice == 'Scissors' || playerChoice == 'Paper' & computerChoice == 'Rock' || playerChoice == 'Scissors' & computerChoice == 'Paper') {
        playerResultDisplay.innerHTML = "Winner!"
        playerResultDisplay.style.color = 'green'
        computerResultDisplay.innerHTML = "Loser"
        computerResultDisplay.style.color = 'red'
        plScore++
        playerScore.textContent = plScore

    } else {
        playerResultDisplay.innerHTML = "Loser"
        playerResultDisplay.style.color = 'red'
        computerResultDisplay.innerHTML = "Winner!"
        computerResultDisplay.style.color = 'green'
        pcScore++
        computerScore.textContent = pcScore
    }
}
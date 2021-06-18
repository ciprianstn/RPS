const computerChoiceDisplay = document.getElementById("computerChoice")
const playerChoiceDisplay = document.getElementById("playerChoice")
const playerScore = document.getElementById("playerScore")
const computerScore = document.getElementById("computerScore")
const possibleChoices = document.querySelectorAll('.far')
const playerResultDisplay = document.getElementById('playerResult')
const computerResultDisplay = document.getElementById('computerResult')
const firstToRounds = document.getElementById('firstToRounds')
const bestOfThree = document.getElementById('bestOf3')
const bestOfFive = document.getElementById('bestOf5')
const bestOfSeven = document.getElementById('bestOf7')
const selectRoundsContainer = document.getElementById('selectRoundsContainer')
const winnerText = document.getElementById('winnerText')
const winnerScreen = document.getElementById('winnerScreen')
const rockIcon = document.getElementById('Rock')

let plScore = 0
let pcScore = 0
var roundsToWin

function firstToWin() {
    selectRoundsContainer.classList.add('hideRoundsContainer')
}

bestOfThree.addEventListener('click', () => {
    roundsToWin = 2
    firstToRounds.innerHTML = 'Great! First to win 2 rounds is the winner!'
    setTimeout('firstToWin()', 1500)
})
bestOfFive.addEventListener('click', () => {
    roundsToWin = 3
    firstToRounds.innerHTML = 'Great! First to win 3 rounds is the winner!'
    setTimeout('firstToWin()', 1500)

})
bestOfSeven.addEventListener('click', () => {
    roundsToWin = 4
    firstToRounds.innerHTML = 'Great! First to win 4 rounds is the winner!'
    setTimeout('firstToWin()', 1500)
})

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
        play()
        playerChoiceDisplay.innerHTML = playerChoice;
        computerChoiceDisplay.innerHTML = computerChoice;
        winner()
    })
})

function play() {

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

function winner() {
    if (plScore == roundsToWin) {
        winnerText.innerHTML = `You won! Final score ${plScore} - ${pcScore}`
        winnerScreen.classList.add('displayWinnerScreen')
    } else if (pcScore == roundsToWin) {
        winnerText.innerHTML = `You lost! Final score ${plScore} - ${pcScore}`
        winnerScreen.classList.add('displayWinnerScreen')

    }
}
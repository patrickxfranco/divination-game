const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')

let randomNumber = newGame()
let xAttempts = 1


function handleClick(event) {
  event.preventDefault()

  inputNumber = Number(document.querySelector('#inputNumber').value)

  if (inputNumber == randomNumber) {
    document.querySelector('.screen2 h2').innerText = `Acertou em ${xAttempts} tentativas`
    screen1.classList.add('hide')
    screen2.classList.remove('hide')
  } else {
    xAttempts++
  }
  
}

function playAgain() {
  xAttempts = 1
  randomNumber = newGame()
  screen1.classList.remove('hide')
  screen2.classList.add('hide')
}

function newGame() {
  let randomNumber = Math.round(Math.random() * 10)
  return randomNumber
}
// ELEMENTOS
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')

// VARIÁVEIS
let randomNumber = newNumber()
let xAttempts = 1

// EVENTOS
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', ifEnterOnScreenTwo)

// FUNÇÕES
function handleTryClick (event) {
  event.preventDefault()
  inputNumber = document.querySelector('#inputNumber')
  if (Number(inputNumber.value) == randomNumber) {
    document.querySelector('.screen2 h2').innerText = `Acertou em ${xAttempts} tentativas`
    toggleScreen()
  } else if (inputNumber.value == '' || inputNumber < 0 || inputNumber > 10) {
      alert('Você precisa digitar um número válido!')
    } else {
      inputNumber.value = ''
      xAttempts++
    }
}

function ifEnterOnScreenTwo (e) {
  if (e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
}

function handleResetClick () {
  xAttempts = 1
  inputNumber.value = ''
  randomNumber = newNumber()
  toggleScreen()
}

function newNumber () {
  let randomNumber = Math.round(Math.random() * 10)
  return randomNumber
}

function toggleScreen () {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}
import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import {IMC, notNumber} from './utils.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = handleSubmit
Modal.buttonClose.addEventListener("click", close)

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()

function handleSubmit(event) {
  event.preventDefault()
  const weight = inputWeight.value
  const height = inputHeight.value

  const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height)

  if (weightOrHeightIsNotANumber) {
    AlertError.open()
    return;
  }
  AlertError.close()
  const result = IMC(weight, height)
  displayResultMessage(result) 
}

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`

  Modal.message.innerHTML = message
  Modal.open()
}

function close() {
  Modal.close()
  resetar()
}
function resetar() {
  document.querySelector('#weight').value = '';
  document.querySelector('#height').value = '';
}

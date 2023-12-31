
export const Modal = {
  //variables
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  buttonClose: document.querySelector('.modal button.close'),
  btnCloseAlert: document.querySelector('.alert-error button'),
  //methods of Modal object 
  open() {
    Modal.wrapper.classList.add("open")
  },
  close() {
    Modal.wrapper.classList.remove("open")
  }
}

window.addEventListener('keydown', handleKeydown)

function handleKeydown(event) {
  if (event.key === 'Escape') {
    Modal.close()
  }
}
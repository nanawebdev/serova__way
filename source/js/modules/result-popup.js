import { isEscEvent } from './helpers.js'

const successMessagePopup = document.querySelector('.success-message-wrapper')
const closeSuccessPopupButtons = document.querySelectorAll('.js-close-success-popup')
const popupOverlays = document.querySelectorAll('.overlay')

function onPopupKeydown(evt) {
  if (isEscEvent(evt)) {
    closeSuccessPopup()
  }
}

function closeSuccessPopup() {
  successMessagePopup.classList.remove('success-message-wrapper--show')
  document.removeEventListener('keydown', onPopupKeydown)
}

function showResultPopup() {
  successMessagePopup.classList.add('success-message-wrapper--show')
  document.addEventListener('keydown', onPopupKeydown)
}

closeSuccessPopupButtons.forEach((button) => {
  button.addEventListener('click', closeSuccessPopup)
})

popupOverlays.forEach((overlay) => {
  overlay.addEventListener('click', closeSuccessPopup)
})

export { onPopupKeydown, showResultPopup }


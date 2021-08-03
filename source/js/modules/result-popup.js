const successMessagePopup = document.querySelector('.success-message-wrapper')
const forms = document.querySelectorAll('.form')
const closeSuccessPopupButtons = document.querySelectorAll('.js-close-success-popup')
import { isEscEvent } from './helpers.js'
const popupOverlays = document.querySelectorAll('.overlay')
import { closeBuyTourPopup } from './tours.js'
import { validatePhoneInput, removeErrorMessage, validateEmailInput  } from './form-validation.js'

function onPopupKeydown(evt) {
  if (isEscEvent(evt)) {
    closeSuccessPopup()
  }
}

function closeSuccessPopup() {
  removeErrorMessage()
  successMessagePopup.classList.remove('success-message-wrapper--show')
  document.removeEventListener('keydown', onPopupKeydown)
}

function showResultPopup() {
  successMessagePopup.classList.add('success-message-wrapper--show')
  document.addEventListener('keydown', onPopupKeydown)
}

forms.forEach((form) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    validatePhoneInput()
    validateEmailInput()

    if(validatePhoneInput() && validateEmailInput()) {
      showResultPopup()
      closeBuyTourPopup()
      removeErrorMessage()
    }
  })
})


closeSuccessPopupButtons.forEach((button) => {
  button.addEventListener('click', closeSuccessPopup)
})

popupOverlays.forEach((overlay) => {
  overlay.addEventListener('click', closeSuccessPopup)
})

export { onPopupKeydown }


import { closeBuyTourPopup } from './tours.js'
import { showResultPopup } from './result-popup.js'

const buyTourForm = document.querySelector('.js-buy-tour-form')
const questionsForm = document.querySelector('.js-questions-form')

buyTourForm.addEventListener('submit', (evt) => {
  evt.preventDefault()
  const phoneField = buyTourForm.querySelector('.js-error-message-phone')
  const emailField = buyTourForm.querySelector('.js-error-message-mail')

  const isEmailValid = validateEmailInput(emailField)
  const isPhoneValid = validatePhoneInput(phoneField)

  const isFormValid = isEmailValid && isPhoneValid;

  if (isFormValid) {
    closeBuyTourPopup()
    showResultPopup()
    saveUserDataToStorage(phoneField, emailField)

    return
  }
})

questionsForm.addEventListener('submit', (evt) => {
  evt.preventDefault()
  const phoneField = questionsForm.querySelector('.js-error-message-phone')
  const emailField = questionsForm.querySelector('.js-error-message-mail')

  const isEmailValid = validateEmailInput(emailField)
  const isPhoneValid = validatePhoneInput(phoneField)

  const isFormValid = isEmailValid && isPhoneValid;

  if (isFormValid) {
    showResultPopup()
    saveUserDataToStorage(phoneField, emailField)

    return
  }
})

function validateEmailInput(field) {
  const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
  const value = field.querySelector('input').value
  const isEmailValid = value.match(re)

  if (isEmailValid) {
    hideError(field)
    return true
  }

  highlightError(field)
  return false
}

function validatePhoneInput(field) {
  const re = /^\d{10}$/
  const value = field.querySelector('input').value
  const isPhoneValid = value.match(re)

  if (isPhoneValid) {
    hideError(field)
    return true
  }

  highlightError(field)
  return false
}

function highlightError(field) {
  field.classList.add('error-message-wrapper--show')
}

function hideError(field) {
  field.classList.remove('error-message-wrapper--show')
}

function saveUserDataToStorage(phoneField, emailField) {
  const phone = phoneField.querySelector('input').value
  const email = emailField.querySelector('input').value
  window.localStorage.setItem('phone', phone)
  window.localStorage.setItem('email', email)
}

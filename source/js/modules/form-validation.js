const phoneInput = document.querySelectorAll('.js-phone-input')
const mailInput = document.querySelectorAll('.js-mail-input')
const errorMessageWrappers = document.querySelectorAll('.error-message-wrapper')
const errorMessageMail = document.querySelectorAll('.js-error-message-mail')
const errorMessagePhone = document.querySelectorAll('.js-error-message-phone')

function showErrorMessageMail() {
  errorMessageMail.forEach((wrapper) => {
    wrapper.classList.add('error-message-wrapper--show')
  })
}

function showErrorMessagePhone() {
  errorMessagePhone.forEach((wrapper) => {
    wrapper.classList.add('error-message-wrapper--show')
  })
}

function removeErrorMessage() {
  errorMessageWrappers.forEach((wrapper) => {
    wrapper.classList.remove('error-message-wrapper--show')
  })
}

function validatePhoneInput () {
  phoneInput.forEach((input) => {
    const value = input.value
    const re = /^\d{10}/
    if(!value.match(re)) {
      showErrorMessagePhone()
      return false
    }
    return true
  })
}

function validateEmailInput() {
  mailInput.forEach((input) => {
    const value = input.value
    const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/
    if(!value.match(re)) {
      showErrorMessageMail()
      return false
    }
    return true
  })
}


export { validatePhoneInput, removeErrorMessage, validateEmailInput  }

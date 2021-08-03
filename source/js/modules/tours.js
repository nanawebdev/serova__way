const controls = document.querySelectorAll('.countries__control')
const countriesContents = document.querySelectorAll('.countries__content')
const placesLinks = document.querySelectorAll('.places__link')
const buyTourButtons = document.querySelectorAll('.js-open-popup')
const buyTourPopup = document.querySelector('.popup')
const buyTourCloseButtons = document.querySelectorAll('.js-close-popup')
const popupOverlays = document.querySelectorAll('.overlay')
import { isEscEvent } from './helpers.js'
import { setFocus } from './set-focus.js'

function onTourPopupKeydown(evt) {
  if (isEscEvent(evt)) {
    closeBuyTourPopup()
  }
}

function openBuyTourPopup() {
  buyTourPopup.classList.add('popup--open')
  setFocus()

  document.addEventListener('keydown', onTourPopupKeydown)
}

function closeBuyTourPopup() {
  buyTourPopup.classList.remove('popup--open')
  document.removeEventListener('keydown', onTourPopupKeydown)
}

function selectControl(index) {
  const currentControl = controls[index]
  const previousControl = document.querySelector('.countries__control.countries__control--current')
  previousControl.classList.remove('countries__control--current')
  currentControl.classList.add('countries__control--current')
}

function showCountryInfoByIndex(index) {
  const currentContent = countriesContents[index]
  const previousContent = document.querySelector('.countries__content.countries__content--current')
  previousContent.classList.remove('countries__content--current')
  currentContent.classList.add('countries__content--current')
}

placesLinks.forEach((button, index) => {
  button.addEventListener('click', () => {
    showCountryInfoByIndex(index)
    selectControl(index)
  })
})

controls.forEach((control, index) => {
  control.addEventListener('click', () => {
    showCountryInfoByIndex(index)
    selectControl(index)
  })
})

buyTourButtons.forEach((button) => {
  button.addEventListener('click', openBuyTourPopup)
})

buyTourCloseButtons.forEach((button) => {
  button.addEventListener('click', closeBuyTourPopup)
})

popupOverlays.forEach((overlay) => {
  overlay.addEventListener('click', closeBuyTourPopup)
})

export { closeBuyTourPopup }


const controls = document.querySelectorAll('.countries__control')
const countriesContents = document.querySelectorAll('.countries__content')
const countriesControlsWrappers = document.querySelectorAll('.countries__item')
const placesLinks = document.querySelectorAll('.places__link')

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

placesLinks.forEach((button,index) => {
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

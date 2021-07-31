const burgerButton = document.querySelector('.burger')
const burgerMenu = document.querySelector('.burger__menu')
const burgerMenuClose = document.querySelector('.burger__close')

function showMenu() {
    burgerMenu.classList.add('burger__menu--open')
}

function hideMenu() {
    burgerMenu.classList.remove('burger__menu--open')
}

const onBurgerClick = () => {
    showMenu()
}

const onCloseClick = () => {
    hideMenu()
}

burgerButton.addEventListener('click', onBurgerClick)
burgerMenuClose.addEventListener('click', onCloseClick)

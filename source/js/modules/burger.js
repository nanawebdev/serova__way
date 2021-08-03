const burgerButton = document.querySelector('.burger')
const menu = document.querySelector('.main-navigation__menu')
const menuClose = document.querySelector('.main-navigation__close')
const menuLinks = document.querySelectorAll('.main-navigation__link')

function showMenu() {
    menu.classList.add('main-navigation__menu--open')

    menuLinks.forEach((link) => {
      link.addEventListener('click', hideMenu)
    })
}

function hideMenu() {
    menu.classList.remove('main-navigation__menu--open')
}

const onBurgerClick = () => {
    showMenu()
}

const onCloseClick = () => {
    hideMenu()
}

burgerButton.addEventListener('click', onBurgerClick)
menuClose.addEventListener('click', onCloseClick)

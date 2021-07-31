const burgerButton = document.querySelector('.burger')
const burgerMenu = document.querySelector('.burger__menu')
const burgerMenuClose = document.querySelector('.burger__close')

burgerButton.addEventListener('click', () => {
    burgerMenu.classList.add('burger__menu--open')
    
    burgerMenuClose.removeEventListener('click', () => {
        burgerMenu.classList.remove('burger__menu--open')
    })
})

burgerMenuClose.addEventListener('click', () => {
    burgerMenu.classList.remove('burger__menu--open')
    
    burgerButton.removeEventListener('click', () => {
        burgerMenu.classList.add('burger__menu--open')
    })
})
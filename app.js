const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

//display mobile menu

const MobileMenu = () =>{
    menu.classList.toggle("is-active")
    menuLinks.classList.toggle("active")
}

menu.addEventListener('click', MobileMenu);


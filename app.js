const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo= document.querySelector('#navbar__logo');

//display mobile menu

const MobileMenu = () =>{
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
}

menu.addEventListener('click', MobileMenu);


// show active menu 
const highlightMenu =  () =>{
    const element = document.querySelector('.highlight');
    const homeMenu = document.querySelector('.#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const servicesPage = document.querySelector('#services-page');
    let scrollPos = window.scrollY;


    i


}
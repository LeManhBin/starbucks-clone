const navbar = document.querySelector('.navbar');
const searchIcon = document.querySelector('#searchIcon');
const navbarOpenBtn = document.querySelector('.navbar__openbtn');
const navbarCloseBtn = document.querySelector('.navbar__closebtn');
searchIcon.addEventListener('click', ()=> {
    navbar.classList.toggle('open-search');
    navbar.classList.remove('openNavbar');
});

navbarOpenBtn.addEventListener('click', () => {
    navbar.classList.add('openNavbar');
    navbar.classList.remove('open-search');
});
navbarCloseBtn.addEventListener('click', () => {
    navbar.classList.remove('openNavbar');
});
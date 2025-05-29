const btnOpen = document.querySelector('#btnOpen');
const btnClose = document.querySelector('#btnClose');
const media = window.matchMedia('(width < 40em)');
const navMenu = document.querySelector('.nav__menu');
const main = document.querySelector('main');

function setUpNav(e) {
    if(e.matches) {
        navMenu.setAttribute('inert', '');
        navMenu.style.transition='none';
    } else {
        navMenu.removeAttribute('inert');
        closeMobileMenu();
    }
}

function openMobileMenu() {
    btnOpen.setAttribute('aria-expanded', true);
    navMenu.removeAttribute('inert');
    navMenu.removeAttribute('style');
    main.setAttribute('inert', '');
    btnClose.focus();
}

function closeMobileMenu() {
    btnOpen.setAttribute('aria-expanded', false);
    navMenu.setAttribute('inert', '');
    main.removeAttribute('inert');
    btnOpen.focus();

    setTimeout(() => {
        navMenu.style.transition='none'; 
    }, 500);

}

setUpNav(media);

btnOpen.addEventListener('click', openMobileMenu);
btnClose.addEventListener('click', closeMobileMenu);

media.addEventListener('change', (e) => {
    setUpNav(e);
})
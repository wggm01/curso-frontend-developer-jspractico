const emailLink = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

emailLink.addEventListener('click', toggleAccountMenu);

function toggleAccountMenu(){
    desktopMenu.classList.toggle('inactive');
}
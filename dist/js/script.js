const hamburger = document.querySelector('#hamburger');

const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('ham-menu');
    navMenu.classList.toggle('hidden');
});

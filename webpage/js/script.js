var menu = document.getElementById('menu');
var close = document.getElementById('close');
var mainMenu = document.getElementById('mainMenu');

menu.addEventListener('click', ()=>{
    mainMenu.classList.add('showMenu');
});
close.addEventListener('click', ()=>{
    mainMenu.classList.remove('showMenu');
});
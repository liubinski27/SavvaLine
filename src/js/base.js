var buttonS = document.getElementById('menu__btn');

var menu = document.getElementById('hamburger-menu');

buttonS.addEventListener('click', myFun);

function myFun() {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    }
    else {
        menu.classList.add('hidden');
    }
}
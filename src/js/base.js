var allDivsOnPage = document.querySelectorAll('div');
var pageHeight = document.body.scrollHeight;
var windowHeight = window.innerHeight;

if (windowHeight > pageHeight) {
    document.querySelector('.footer').classList.add('footer_adaptive');
}

//начало меню для маленьких устройств
var buttonS = document.getElementById('menu__btn');
var menu = document.getElementById('hamburger-menu');
buttonS.addEventListener('click', menuHidden);

function menuHidden() {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    }
    else {
        menu.classList.add('hidden');
    }
}
//конец меню для маленьких устройств

for (var i = 0; i < allDivsOnPage.length; i++) {
    var pageChanger = allDivsOnPage[i].classList;
    if (pageChanger == 'callMe_button') {
        var callMe_button = document.getElementById('callMe_button');
        var callMe_active = document.getElementById('callMe_active');
        callMe_button.addEventListener('click', callMe_contactsHidden);
    }
}

function callMe_contactsHidden() {
    if (callMe_active.classList.contains('hidden')) {
        callMe_active.classList.remove('hidden');
    }
    else {
        callMe_active.classList.add('hidden');
    }
}
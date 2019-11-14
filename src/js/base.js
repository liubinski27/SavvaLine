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

var imgs = document.querySelectorAll('div.carousel > img');

setInterval(checkNow, 5000);

function checkNow() {
    for (var i = 0; i < imgs.length; i++) {
        var now = imgs[i].classList;
        var ifLast = false;
        if (now == 'active') {
            if (i === imgs.length - 1) {
                var ifLast = true;
            }
            changeImg(i, ifLast);
            break;
        }
    }
}

function changeImg(value, ifLastValue) {
    imgs[value].classList.remove('active');
    if (ifLastValue) {
        imgs[0].classList.add('active');
    }
    else {
        imgs[value + 1].classList.add('active');
    }
}
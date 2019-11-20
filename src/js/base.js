function carouselHeight() {
    var carouselImg = document.querySelector('.carousel');
    var carouselImgWidth = carouselImg.offsetWidth;
    var carouselImgHeight;
    switch (carouselImgWidth) {
        case carouselImgWidth > 1199: carouselImgHeight = 800;
        case carouselImgWidth < 1200 && carouselImgWidth > 991: carouselImgHeight = 650;
        case carouselImgWidth < 992 && carouselImgWidth > 767: carouselImgHeight = 514;
        case carouselImgWidth < 768 && carouselImgWidth > 575: carouselImgHeight = 395;
        case carouselImgWidth < 576 && carouselImgWidth > 479: carouselImgHeight = 329;
        case carouselImgWidth < 480: carouselImgHeight = 219;
    }
    document.querySelector('.carousel').style.height = carouselImgHeight + 'px';
}

/*function carouselHeight() {
    var carouselImg = document.querySelector('.carousel');
    var carouselImgWidth = carouselImg.offsetWidth;
    var carouselImgHeight = carouselImgWidth / 1.46;
    document.querySelector('.carousel').style.height = carouselImgHeight + 'px';
}*/

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

carouselHeight();

var handle = setInterval(checkNowForNext, 4000);
var imgs = document.querySelectorAll('div.pics > img');
var buttonWaitTimer = 0;
var ifLast;
var ifFirst;

function buttonWaitTimerFunction() {
    buttonWaitTimer = 0;
}

function checkNowForNext() {
    if (buttonWaitTimer === 0) {
        buttonWaitTimer = 1;
        for (var i = 0; i < imgs.length; i++) {
            var now = imgs[i].classList;
            var ifLast = false;
            if (now == 'active') {
                if (i === imgs.length - 1) {
                    ifLast = true;
                }
                carouselNext(i, ifLast);
                setTimeout(buttonWaitTimerFunction, 1700);
                break;
            }
        }
    }
}

function carouselNext(value, ifLastValue) {
    imgs[value].classList.add('opacityHidden');
    setTimeout(function () {
        imgs[value].classList.remove('active');
        if (ifLastValue) {
            imgs[0].classList.add('active');
            setTimeout(function () {
                imgs[0].classList.remove('opacityHidden');
            }, 200);
        }
        else {
            imgs[value + 1].classList.add('active');
            setTimeout(function () {
                imgs[value + 1].classList.remove('opacityHidden');
            }, 200);
        }
        carouselHeight();
    }, 1200);
}

function checkNowForPrev() {
    if (buttonWaitTimer === 0) {
        buttonWaitTimer = 1;
        for (var i = 0; i < imgs.length; i++) {
            var now = imgs[i].classList;
            var ifFirst = false;
            if (now == 'active') {
                if (i === 0) {
                    ifFirst = true;
                }
                carouselPrev(i, ifFirst);
                setTimeout(buttonWaitTimerFunction, 1700);
                break;
            }
        }
    }
}

function carouselPrev(value, ifFirstValue) {
    imgs[value].classList.add('opacityHidden');
    setTimeout(function () {
        imgs[value].classList.remove('active');
        if (ifFirstValue) {
            imgs[imgs.length - 1].classList.add('active');
            setTimeout(function () {
                imgs[imgs.length - 1].classList.remove('opacityHidden');
            }, 200);
        }
        else {
            imgs[value - 1].classList.add('active');
            setTimeout(function () {
                imgs[value - 1].classList.remove('opacityHidden');
            }, 200);
        }
        carouselHeight();
    }, 1200);
}

function btnLeftRefreshTimer() {
    checkNowForPrev();
    clearInterval(handle);
    handle = setInterval(checkNowForNext, 4000);
}

function btnRightRefreshTimer() {
    checkNowForPrev();
    clearInterval(handle);
    handle = setInterval(checkNowForNext, 4000);
}

var btnLeft = document.querySelector('.btnLeft');
btnLeft.addEventListener('click', btnLeftRefreshTimer);

var btnRight = document.getElementById('btnRight');
btnRight.addEventListener('click', btnRightRefreshTimer);

function callMe_contactsHidden() {
    if (callMe_active.classList.contains('hidden')) {
        callMe_active.classList.remove('hidden');
    }
    else {
        callMe_active.classList.add('hidden');
    }
}

var callMe_button = document.getElementById('callMe_button');
var callMe_active = document.getElementById('callMe_active');
callMe_button.addEventListener('click', callMe_contactsHidden);
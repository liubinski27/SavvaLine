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

carouselHeight();

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

setInterval(checkNowForNext, 4000);

var imgs = document.querySelectorAll('div.pics > img');

function checkNowForNext() {
    for (var i = 0; i < imgs.length; i++) {
        var now = imgs[i].classList;
        var ifLast = false;
        if (now == 'active') {
            if (i === imgs.length - 1) {
                var ifLast = true;
            }
            carouselNext(i, ifLast);
            break;
        }
    }
}

function carouselNext(value, ifLastValue) {
    imgs[value].classList.add('opacityHidden');
    setTimeout(function () {
        imgs[value].classList.remove('active');
        if (ifLastValue) {
            imgs[0].classList.add('active');
            setTimeout(function() {
                imgs[0].classList.remove('opacityHidden');
            }, 200);
        }
        else {
            imgs[value + 1].classList.add('active');
            setTimeout(function() {
                imgs[value + 1].classList.remove('opacityHidden');
            }, 200);
        }
        carouselHeight();
    }, 1000);
    setTimeout(checkNowForNext, 4000);
}

function checkNowForPrev() {
    for (var i = 0; i < imgs.length; i++) {
        var now = imgs[i].classList;
        var ifFirst = false;
        if (now == 'active') {
            if (i === 0) {
                var ifFirst = true;
            }
            carouselPrev(i, ifFirst);
            break;
        }
    }
}

function carouselPrev(value, ifFirstValue) {
    imgs[value].classList.add('opacityHidden');
    setTimeout(function () {
        imgs[value].classList.remove('active');
        if (ifFirstValue) {
            imgs[imgs.length - 1].classList.add('active');
            setTimeout(function() {
                imgs[imgs.length - 1].classList.remove('opacityHidden');
            }, 200);
        }
        else {
            imgs[value - 1].classList.add('active');
            setTimeout(function() {
                imgs[value - 1].classList.remove('opacityHidden');
            }, 200);
        }
        carouselHeight();
    }, 1000);
}

/*function carouselHeight() {
    var carouselImg = document.querySelector('.carousel');
    var carouselImgWidth = carouselImg.offsetWidth;
    var carouselImgHeight = carouselImgWidth / 1.46;
    document.querySelector('.carousel').style.height = carouselImgHeight + 'px';
}*/

var btnLeft = document.querySelector('.btnLeft');
btnLeft.addEventListener('click', checkNowForPrev);

var btnRight = document.getElementById('btnRight');
btnRight.addEventListener('click', checkNowForNext);
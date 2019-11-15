function carouselHeight() {
    var carouselImg = document.querySelector('.carousel');
    var carouselImgWidth = carouselImg.offsetWidth;
    var carouselImgHeight;
    switch(carouselImgWidth) {
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
    carouselHeight();
}

/*function carouselHeight() {
    var carouselImg = document.querySelector('.carousel');
    var carouselImgWidth = carouselImg.offsetWidth;
    var carouselImgHeight = carouselImgWidth / 1.46;
    document.querySelector('.carousel').style.height = carouselImgHeight + 'px';
}*/

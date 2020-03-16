window.onload = function () {
    let arrTag = document.querySelectorAll('.tag-list__item');
    for (let i = 0; i < arrTag.length; i++) {
        arrTag[i].addEventListener('click', function (event) {
            arrTag[i].classList.toggle('tag-list-item_active');
        });
    }
    let arrImg = document.querySelectorAll('.gallery__item');
    for(let i = 0; i < arrImg.length; i++) {
        arrImg[i].addEventListener('click', function(event){
            arrImg[i].classList.toggle('gallery__item_border_red');
        });
    }
}

let i = 0;
let s1 = true;
let s2 = true;

function sr(y) {
    let a = document.querySelectorAll('.navigation__item a');
    a.forEach(function (element) {
        if (element.classList.contains('navigation__link_active')) {
            element.classList.remove('navigation__link_active');
        }
    });
    switch (y) {
        case 0:
            a[0].classList.add('navigation__link_active');
            break;
        case 600:
            a[1].classList.add('navigation__link_active');
            break;
        case 1105:
            a[2].classList.add('navigation__link_active');
            break;
        case 1970:
            a[3].classList.add('navigation__link_active');
            break;
        case 2710:
            a[4].classList.add('navigation__link_active');
            break;
    }
    window.scrollTo(0, y);
}

function filterGallery() {
    let arrImg = document.querySelectorAll('.gallery__item');
    arrImg.forEach(function (element) {
        let num = Math.floor(Math.random() * Math.floor(arrImg.length));
        element.style.order = '' + num;
    });
}

let slideRight = function () {

    document.querySelectorAll('.slider_item').forEach(function (element) {

        element.style.left = `${i}px`;

        if (element.style.left === '-940px') {
            s1 = false;
            clearInterval(slideRight);
            return;
        }
        if (s1) {
            i -= 10;
        }
    });
};

let slideLeft = function () {

    document.querySelectorAll('.slider_item').forEach(function (element) {

        element.style.left = `${i}px`;

        if (element.style.left === '0px') {
            s2 = false;
            clearInterval(slideLeft);
            return;
        }
        if (s2) {
            i += 10;
        }
    });
};

function sRight() {
    if (i == -940) {
        document.querySelectorAll('.slider_item').forEach(element => element.style.left = '0px');
        i = 0;
    } else {
        setInterval(slideRight, 1);
        s1 = true;
    }
}
function sLeft() {
    if (i == 0) {
        document.querySelectorAll('.slider_item').forEach(element => element.style.left = '-940px');
        i = -940;
    } else {
        setInterval(slideLeft, 1);
        s2 = true;
    }
}

function screenSwich(selector) {
    let screen = document.querySelector(selector);
    screen.classList.toggle('opacity_true');
}

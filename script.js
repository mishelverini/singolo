//-------------------------------Slider-------------------------------//
let i = 0;
let s1 = true;
let s2 = true;

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
//-------------------------------Slider-------------------------------//

//-----------------------------Navigation-----------------------------//
let navItemAddActive = function (event) {
    console.log(event.target);
    navItemRemoveActive('.navigation__item a', 'navigation__link_active');
    event.target.classList.add('navigation__link_active');
    scrollPage(event);
};

let navItemRemoveActive = function (tag, nameClass) {
    document.querySelectorAll(tag).forEach(function (element) {
        if (element.classList.contains(nameClass)) {
            element.classList.remove(nameClass);
        }
    });
};

let scrollPage = function (event) {
    let innerTextLink = event.target.textContent;
    innerTextLink == 'home' ? window.scrollTo(0, 0) : '';
    innerTextLink == 'services' ? window.scrollTo(0, 600) : '';
    innerTextLink == 'portfolio' ? window.scrollTo(0, 1100) : '';
    innerTextLink == 'about' ? window.scrollTo(0, 1970) : '';
    innerTextLink == 'contact' ? window.scrollTo(0, 2704) : '';
};

document.querySelector('.navigation').addEventListener('click', navItemAddActive);
//-----------------------------Navigation-----------------------------//

//---------------------------Portfolio-Tag---------------------------//
function filterGallery() {
    let arrImg = document.querySelectorAll('.gallery__item');
    arrImg.forEach(function (element) {
        let num = Math.floor(Math.random() * Math.floor(arrImg.length));
        element.style.order = '' + num;
    });
}

let activeTag = function(event) {
    event.target.classList.toggle('tag-list-item_active');
    filterGallery();
}
document.querySelector('.tag-list').addEventListener('click', activeTag);
//---------------------------Portfolio-Tag---------------------------//

//------------------------------Gallery-----------------------------//
let selectePhoto = function(event) {
    event.target.classList.toggle('gallery__item_border_red');
}

document.querySelector('.gallery').addEventListener('click', selectePhoto);
//------------------------------Gallery-----------------------------//

//--------------------------Mobile-Swicher-------------------------//
function screenSwich(selector) {
    let screen = document.querySelector(selector);
    screen.classList.toggle('opacity_true');
}
//--------------------------Mobile-Swicher-------------------------//

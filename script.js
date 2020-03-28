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
            i -= 1;
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
            i += 5;
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
    let arrImg = document.querySelectorAll('.gallery div');
    arrImg.forEach(function (element) {
        let num = Math.floor(Math.random() * Math.floor(arrImg.length));
        element.style.order = '' + num;
    });
}

let activeTag = function(event) {
    if(event.target == event.currentTarget) {
        return;
    }
    event.target.classList.toggle('tag-list-item_active');
    filterGallery();
}
document.querySelector('.tag-list').addEventListener('click', activeTag);
//---------------------------Portfolio-Tag---------------------------//

//------------------------------Gallery-----------------------------//
let selectePhoto = function(event) {
    if(event.target == event.currentTarget) {
        return;
    }
    if(event.target.classList.contains('gallery__item_border_red')) {
        event.target.classList.toggle('gallery__item_border_red');
    } else {
        navItemRemoveActive('.gallery__item', 'gallery__item_border_red');
        event.target.classList.toggle('gallery__item_border_red');
    }
}

document.querySelector('.gallery').addEventListener('click', selectePhoto);
//------------------------------Gallery-----------------------------//

//--------------------------Mobile-Swicher-------------------------//
function screenSwich(selector) {
    let screen = document.querySelector(selector);
    screen.classList.toggle('opacity_true');
}
//--------------------------Mobile-Swicher-------------------------//

//--------------------------Form-------------------------//
let visibilityAdd = function(element) {
    document.querySelector(element).classList.remove('visibility');
};

let visibilityDel = function(element) {
    document.querySelector(element).classList.add('visibility');
};

let dataOutputWindowText = function (){
    let arrInput = getDataInput('.form-question__input');
    if (arrInput[0].validity.valid && arrInput[1].validity.valid) {
        visibilityAdd('.window-text');
        let subjectText = arrInput[2].value.trim();
        let textDescript = arrInput[3].value.trim();

        let arrWindowTextItem = getDataInput('.window-text__item');

        arrWindowTextItem[1].innerHTML = validationInput(subjectText, 1);
        arrWindowTextItem[2].innerHTML = validationInput(textDescript, 2);
    }
};

let validationInput = function(element, num) {
    if(element.length == 0 && num == 1) {
        return 'Без темы';
    } else if (element.length == 0 && num == 2) {
        return 'Без описания';
    } else if (element.length != 0 && num == 1) {
        return 'Тема:' + ' ' + element;
    } else if (element.length != 0 && num == 2) {
        return 'Описание:' + ' ' + element;
    }
}

let getDataInput = function(element) {
    return document.querySelectorAll(element);
};

let closeWindowText = function() {
    visibilityDel('.window-text');
    let arrInput = getDataInput('.form-question__input');
    arrInput.forEach(function(element){
        element.value = '';
    });
}

document.querySelector('.feedback__button').addEventListener('click', dataOutputWindowText);
document.querySelector('.window-text__button').addEventListener('click', closeWindowText);
//--------------------------Form-------------------------//
//--------------------------Window-Nav-------------------------//
let windowNav = function() {
    let windowShow = document.querySelector('.modal-window-nav');
    windowShow.classList.toggle('visibility');
    let burger = document.querySelector('.burger');
    let logo = document.querySelector('.logo > div');

    if(burger.classList.contains('transform')) {
        burger.classList.add('transform-0');
        burger.classList.remove('transform');
    } else {
        burger.classList.add('transform');
        burger.classList.remove('transform-0');
    }

    if(logo.classList.contains('transform-logo')) {
        logo.classList.add('transform-logo-0');
        logo.classList.remove('transform-logo');
    } else {
        logo.classList.add('transform-logo');
        logo.classList.remove('transform-logo-0');
    }

    // burger.classList.toggle('transform');
    let burgerP = document.querySelectorAll('.burger div');
    for (let i = 0; i < burger.length; i++) {
        burger[i].classList.toggle('index-1');
    }
    document.querySelector('.over').classList.toggle('visibility');
    windowShow.classList.add('index-0');

    // document.querySelector('.logo > div').classList.toggle('transform-logo');
}

document.querySelector('.burger-menu').addEventListener('click', windowNav);

//--------------------------Window-Nav-------------------------//


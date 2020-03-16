let i = 0;
let s1 = true;
let s2 = true;

function sr(y) {
    window.scrollTo(0, y);
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

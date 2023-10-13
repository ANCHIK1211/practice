let offsetTeach = 0;
const sliderLineTeach = document.querySelector('.teach__slider-line');

document.querySelector('.teach__slider-next').addEventListener('click', function(){
    offsetTeach = offsetTeach + 313;
    if (offsetTeach > 900) {
        offsetTeach = 0;
    }
    sliderLineTeach.style.left = -offsetTeach + 'px';
});

document.querySelector('.teach__slider-prev').addEventListener('click', function () {
    offsetTeach = offsetTeach - 313;
    if (offsetTeach < 0) {
        offsetTeach = 900;
    }
    sliderLineTeach.style.left = -offsetTeach + 'px';
});
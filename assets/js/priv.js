let offsetPriv = 0;
const sliderLinePriv = document.querySelector('.priv__slider-line');

document.querySelector('.priv__slider-next').addEventListener('click', function(){
    offsetPriv = offsetPriv + 360;
    if (offsetPriv > 1000) {
        offsetPriv = 0;
    }
    sliderLinePriv.style.left = -offsetPriv + 'px';
});

document.querySelector('.priv__slider-prev').addEventListener('click', function () {
    offsetPriv = offsetPriv - 360;
    if (offsetPriv < 0) {
        offsetPriv = 1000;
    }
    sliderLinePriv.style.left = -offsetPriv + 'px';
});
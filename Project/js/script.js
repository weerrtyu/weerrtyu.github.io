let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider1_right_click').addEventListener('click', function(){
    offset = offset + 400;
    if (offset > 1600) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider1_left_click').addEventListener('click', function () {
    offset = offset - 400;
    if (offset < 0) {
        offset = 1600;
    }
    sliderLine.style.left = -offset + 'px';
});




// для отзывов
const sliderLineReviews = document.querySelector('.latest-reviews__container-reviews');

document.querySelector('.slider2_right_click').addEventListener('click', function(){
    offset = offset + 750;
    if (offset > 1500) {
        offset = 0;
    }
    sliderLineReviews.style.left = -offset + 'px';
});

document.querySelector('.slider2_left_click').addEventListener('click', function () {
    offset = offset - 750;
    if (offset < 0) {
        offset = 1500;
    }
    sliderLineReviews.style.left = -offset + 'px';
});
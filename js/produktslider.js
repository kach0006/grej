const productContainers = [...document.querySelectorAll('.products-image-slider')];
const nxtBtn = [...document.querySelectorAll('.slider-icon-right')];
const preBtn = [...document.querySelectorAll('.slider-icon-left')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})
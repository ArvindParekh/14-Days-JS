let btnLeft = document.querySelector('.btn-left');
let btnRight = document.querySelector('.btn-right');
// console.log(btn);
let imageSlider = document.querySelector('.image-container');
let images = document.querySelectorAll('img');
let imageIndex = 1;

let timeout;

btnRight.addEventListener("click", () => {
    imageIndex++;
    clearTimeout(timeout);
    updateImg();
});

btnLeft.addEventListener("click", () => {
    imageIndex--;
    clearTimeout(timeout);
    updateImg();
});

updateImg();

function updateImg() {
    if (imageIndex > images.length) {
        imageIndex = 1;
    } else if (imageIndex < 1) {
        imageIndex = images.length;
    }
    imageSlider.style.transform = `translateX(-${(imageIndex - 1) * 580}px)`;
    timeout = setTimeout(() => {
        imageIndex++;
        updateImg();
    }, 3000);
}

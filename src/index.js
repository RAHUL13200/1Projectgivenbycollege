let slideImgIdx = 1;
slideDisplay(slideImgIdx);

function plusSlides(n) {
    slideDisplay(slideImgIdx += n);
}

function currentSlide(n) {
    slideDisplay(slideImgIdx = n);
}

function slideDisplay(n) {
    let i;
    let imgslides = document.getElementsByClassName("image-slider-content");
    let dots = document.getElementsByClassName("dot");
    if (n > imgslides.length) { slideImgIdx = 1 }
    if (n < 1) { slideImgIdx = imgslides.length; }
    for (i = 0; i < imgslides.length; i++) {
        console.log(imgslides.length)
        console.log(slideImgIdx)
        imgslides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {

        dots[i].className = dots[i].className.replace(" active", "");
    }
    imgslides[slideImgIdx - 1].style.display = "block";
    dots[slideImgIdx - 1].className += " active";
}
function myFunction(x) {
    $(".nav1").toggle();
};
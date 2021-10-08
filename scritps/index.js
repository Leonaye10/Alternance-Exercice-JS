
let changerImage = () => {
    let images = document.querySelectorAll("img");
    let  imgTemp2 = images[1].src;
    images[1].src = images[0].src;
    let  imgTemp3 = images[2].src;
    images[2].src = imgTemp2;
    let  imgTemp4 = images[3].src;
    images[3].src = imgTemp3;
    images[0].src = imgTemp4;
}
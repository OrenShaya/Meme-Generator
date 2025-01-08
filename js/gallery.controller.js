'use strict'

let gElCanvas;
let gCtx;

function onInit() {
    loadImages()
    
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    /* TODO: hide canvas */

    // onResize()
}

// function onResize() {
//     const elContainer = document.querySelector('.canvas-container')
    
//     gElCanvas.width = elContainer.offsetWidth
//     gElCanvas.height = elContainer.offsetHeight
// }

function loadImages() {
    const elGallery = document.querySelector('.gallery')
    for (let i = 1; i <= 18; i++) {
        let imgString = `<img onclick="onImgClick(this)" src="meme-imgs/meme-imgs (square)/${i}.jpg" alt="img${i}">` // maybe not needed: data-img-num="${i}">`
        elGallery.innerHTML += imgString
    }
}

function onImgClick(elImg) {
    console.log('clicked on image', elImg.src);

    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height);
}
'use strict'

function onInit() {
    loadImages()
    initCanvas()
}

function loadImages() {
    const elGallery = document.querySelector('.gallery')
    for (let i = 1; i <= 18; i++) {
        let imgString = `<img onclick="onImgClick(this)" src="images/meme-imgs/meme-imgs (square)/${i}.jpg" alt="img${i}">` // maybe not needed: data-img-num="${i}">`
        elGallery.innerHTML += imgString
    }
}

function onImgClick(elImg) {
    document.querySelector('.meme-editor').classList.remove('hidden')
    initCanvas()
    gCurrImg = elImg.src
    renderCanvas()
}

function onGalleryClick() {
    document.querySelector('.meme-editor').classList.add('hidden')
}
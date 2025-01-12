'use strict'

function onInit() {
    loadImages()
    initCanvas()
}

function loadImages() {
    const elGallery = document.querySelector('.gallery')
    for (let i = 1; i <= 18; i++) {
        let imgString = `<img onclick="onImgClick(this)" src="images/meme-imgs/meme-imgs (square)/${i}.jpg" alt="img${i}">`
        elGallery.innerHTML += imgString
    }
}

function onImgClick(elImg) {
    document.querySelector('.meme-editor').classList.remove('hidden')
    document.querySelector('.gallery').classList.add('hidden')
    initCanvas()
    gCurrImg = elImg.src
    renderCanvas()
}

function onGalleryClick() {
    document.querySelector('.meme-editor').classList.add('hidden')
    document.querySelector('.saved-gallery').classList.add('hidden')
    document.querySelector('.gallery').classList.remove('hidden')
}

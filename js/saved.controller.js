'use strict'

function onSavedClick() {
    document.querySelector('.gallery').classList.add('hidden')
    document.querySelector('.meme-editor').classList.add('hidden')
    const elSaved = document.querySelector('.saved-gallery')
    elSaved.classList.remove('hidden')
    const savedMemes = JSON.parse(loadSavedMemes())
    
    if (!savedMemes) {  // no memes saved D:
        elSaved.innerHTML = '<h2 class="empty-memes">Looks like you have not saved anything.... </h2>'
        elSaved.classList.add('empty')
    }
    else {              // some memes :D
        // console.log(JSON.stringify(savedMemes['texts']));
        

        elSaved.innerHTML = `<img onclick="onSavedImgClick(this)"
        data-texts='${JSON.stringify(savedMemes['texts'])}'
        src="${savedMemes['img data']}" alt="meme">`
        elSaved.classList.remove('empty')
    }
}

function onSavedImgClick(elImg) {
    document.querySelector('.saved-gallery').classList.add('hidden')
    document.querySelector('.meme-editor').classList.remove('hidden')
    
    console.log(elImg)    
    console.log(elImg.getAttribute('data-texts'));
    
    const newTexts = JSON.parse(elImg.getAttribute('data-texts'))
    onImgClick(elImg)
    changeAllText(newTexts)
}

function loadSavedMemes() {
    return localStorage.getItem(SAVED_MEMES_KEY) 
}

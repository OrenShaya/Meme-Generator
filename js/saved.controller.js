'use strict'

function onSavedClick() {
    document.querySelector('.gallery').classList.add('hidden')
    document.querySelector('.meme-editor').classList.add('hidden')
    const elSaved = document.querySelector('.saved-gallery')
    elSaved.classList.remove('hidden')
    const savedMemes = loadSavedMemes()
    
    if (!savedMemes) {  // no memes saved D:
        elSaved.innerHTML = '<h2 class="empty-memes">Looks like you have not saved anything.... </h2>'
        elSaved.classList.add('empty')
    }
    else {              // some memes :D
        elSaved.innerHTML = ''
        savedMemes.forEach(meme => {
            elSaved.innerHTML += `<img onclick="onSavedImgClick(this)"
            data-texts='${JSON.stringify(meme['texts'])}'
            data-og-img="${meme['clean img']}"
            src="${meme['dirty img']}" alt="meme">`;
        });
        elSaved.classList.remove('empty')
    }
}

function onSavedImgClick(elImg) {
    document.querySelector('.saved-gallery').classList.add('hidden')
    document.querySelector('.meme-editor').classList.remove('hidden')
    document.querySelector('.gallery').classList.remove('hidden')
    
    const newTexts = JSON.parse(elImg.getAttribute('data-texts'))
    const ogImg = elImg.getAttribute('data-og-img')

    elImg.src = ogImg
    onImgClick(elImg)
    changeAllText(newTexts)
    renderAllText()
        
    document.querySelector('.text-input').value = gTexts[gCurrText].text
}

function loadSavedMemes() {
    return JSON.parse(localStorage.getItem(SAVED_MEMES_KEY))
}

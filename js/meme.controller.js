'use strict'

function onAddText() {
    document.querySelector('.text-input').value = ''
    createNewText()
}

function onSwitchTextUp() {
    if (gCurrText == 0) return
    changeCurrText(-1)
    document.querySelector('.text-input').value = gTexts[gCurrText].text
}

function onSwitchTextDown() {
    if (gCurrText + 1 >= gTexts.length) return
    changeCurrText(+1)
    document.querySelector('.text-input').value = gTexts[gCurrText].text
}

function onMouseDown(event) {
    let pos = getPos(event)
    if (!isClickedAnyText(pos.x, pos.y)) return false
    gTexts[gCurrText].grabbed = true
    document.querySelector('.text-input').value = gTexts[gCurrText].text
}

function onMouseUp() {
    gTexts[gCurrText].grabbed = false
}

function onMouseMove(event) {
    if (!gTexts[gCurrText].grabbed) return false
    gTexts[gCurrText].pos = getPos(event)

    renderCanvas()
}

function onChangeColorFilling(elTextFillColor) {
    document.querySelector('.text-filling-color').click()

    gTexts[gCurrText].fillColor = elTextFillColor.value
    renderCanvas()
}

function onFontChange(elFont) {
    gTexts[gCurrText].font = elFont.value
    renderCanvas()
}

function onChangeColorBorder(elTextBorderColor) {
    gTexts[gCurrText].strokeColor = elTextBorderColor.value
    renderCanvas()
}

function onMemeTextChange(elText) {
    gTexts[gCurrText].text = elText.value;
    renderCanvas()
}

function onFontSizeIncrease() {
    gTexts[gCurrText].size += 1
    renderCanvas()
}

function onFontSizeDecrease() {
    gTexts[gCurrText].size -= 1
    renderCanvas()
}

function onDownloadCanvas(elLink) {
    const dataUrl = gElCanvas.toDataURL()
    elLink.href = dataUrl
    elLink.download = 'Ma Meme'
}

function onSaveClick() {
    
    const dataUrl = gElCanvas.toDataURL()

    let savedMemes = loadSavedMemes()
    if (!savedMemes) savedMemes = []
    savedMemes.push({'dirty img': dataUrl, 'clean img': gCurrImg, 'texts': gTexts})

    localStorage.setItem(SAVED_MEMES_KEY, JSON.stringify(savedMemes))
    onSavedClick()
}

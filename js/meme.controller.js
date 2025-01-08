'use strict'

function onChangeColorFilling(elTextFillColor) {
    document.querySelector('.text-filling-color').click()

    gFontOptions.fillColor = elTextFillColor.value
    renderCanvas()
}

function onChangeColorBorder(elTextBorderColor) {
    gFontOptions.strokeColor = elTextBorderColor.value
    renderCanvas()
}

function onMemeTextChange(elText) {
    gFontOptions.text = elText.value;
    renderCanvas()
}

function onFontSizeIncrease() {
    gFontOptions.size += 1
    renderCanvas()
}

function onFontSizeDecrease() {
    gFontOptions.size -= 1
    renderCanvas()
}

function onDownloadCanvas(elLink) {
    const dataUrl = gElCanvas.toDataURL()
    elLink.href = dataUrl
    elLink.download = 'Ma Meme'
}

// function onResize() {
//     const elContainer = document.querySelector('.canvas-container')
    
//     gElCanvas.width = elContainer.offsetWidth
//     gElCanvas.height = elContainer.offsetHeight
// }
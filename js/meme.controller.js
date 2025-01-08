'use strict'

function onChangeColorFilling(elTextFillColor) {
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

// function onResize() {
//     const elContainer = document.querySelector('.canvas-container')
    
//     gElCanvas.width = elContainer.offsetWidth
//     gElCanvas.height = elContainer.offsetHeight
// }
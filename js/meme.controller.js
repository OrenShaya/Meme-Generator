'use strict'

function getPos(ev) {
    let pos
    if (['touchstart', 'touchmove', 'touchend'].includes(ev.type)) {
        ev.preventDefault()        
        ev = ev.changedTouches[0] 
        pos = {
            x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            y: ev.pageY - ev.target.offsetTop - ev.target.clientTop,
        }
    }
    else {
        pos = {
            x: ev.offsetX,
            y: ev.offsetY,
        }
    }
    return pos
}

function onMouseDown(event) {
    let pos = getPos(event)
    if (!didItClickedOnText(pos.x, pos.y)) return false
    gFontOptions.grabbed = true
}

function onMouseUp() {
    gFontOptions.grabbed = false
}

function onMouseMove(event) {
    if (!gFontOptions.grabbed) return false
    gFontOptions.pos = getPos(event)

    renderCanvas()
}

function onChangeColorFilling(elTextFillColor) {
    document.querySelector('.text-filling-color').click()

    gFontOptions.fillColor = elTextFillColor.value
    renderCanvas()
}

function onFontChange(elFont) {
    gFontOptions.font = elFont.value
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

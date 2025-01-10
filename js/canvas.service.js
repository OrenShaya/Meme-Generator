'use strict'

let gElCanvas;
let gCtx;
let gCurrImg;
let gTexts;
let gCurrText;
const SAVED_MEMES_KEY = 'memes';

function initCanvas() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')

    gCurrImg = ''
    gCurrText = 0
    gTexts = [{
        textIndex: gCurrText,
        text: '',
        size: 20,
        font: 'Impact',
        fillColor: 'black',
        strokeColor: 'white',
        pos: 
        {
            x: 30,
            y: 50,
        },
        grabbed: false
    }]
}

function createNewText() {  
    gTexts.push(structuredClone(gTexts[gCurrText]))
    gCurrText++
    gTexts[gCurrText].pos.x += 20
    gTexts[gCurrText].pos.y += 20
    gTexts[gCurrText].text = ''
    gTexts[gCurrText].textIndex = gCurrText
    renderAllText()
}

function renderAllText() {
    gTexts.forEach(reRenderCanvasText);
}

function reRenderCanvasText(currText) {            
    gCtx.font = `${currText.size}px ${currText.font}`;
    gCtx.textAlign = 'top'
    gCtx.textBaseline = 'center'
    
    gCtx.strokeStyle = currText.strokeColor
    gCtx.fillStyle = currText.fillColor

    gCtx.fillText(currText.text, currText.pos.x, currText.pos.y);
    gCtx.strokeText(currText.text, currText.pos.x, currText.pos.y);
}

function renderCanvas() {
    if (gCurrImg === '') return renderAllText()
    const elImg = new Image();
    elImg.src = gCurrImg; 
    elImg.onload = () => {

        gElCanvas.width = gElCanvas.clientWidth;
        gElCanvas.height = gElCanvas.clientWidth * (elImg.height / elImg.width);
        
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height);
        
        renderAllText()
    };
}

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

function changeAllText(newTexts) {
    gTexts = newTexts
    gCurrText = 0
}

function changeCurrText(diff) {
    gCurrText += diff
}

function isClickedAnyText(xClicked, yClicked) {
    const textIndexClicked = gTexts.findIndex(text => {
        return didItClickedOnText(xClicked, yClicked, text)
    })
    if (textIndexClicked != -1) {
        gCurrText = textIndexClicked
        return true
    }
    return false
}

function didItClickedOnText(clickedPosX, clickedPosY, currText) {
    const { pos, text, size } = currText
    
    const textWidth = gCtx.measureText(text).width
    const textTop = pos.y - size; 

    const withinX = (clickedPosX >= pos.x) && (clickedPosX <= (pos.x + textWidth))
    const withinY = (clickedPosY >= textTop) && (clickedPosY <= pos.y)

    return withinX && withinY;
}

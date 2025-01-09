'use strict'

let gElCanvas;
let gCtx;
let gCurrImg;
let gFontOptions;

function initCanvas() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')

    gCurrImg = ''
    gFontOptions = {
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
    }
}

function reRenderCanvasText() {        
    gCtx.font = `${gFontOptions.size}px ${gFontOptions.font}`;
    gCtx.textAlign = 'top'
    gCtx.textBaseline = 'center'
    
    gCtx.strokeStyle = gFontOptions.strokeColor
    gCtx.fillStyle = gFontOptions.fillColor

    gCtx.fillText(gFontOptions.text, gFontOptions.pos.x, gFontOptions.pos.y);
    gCtx.strokeText(gFontOptions.text, gFontOptions.pos.x, gFontOptions.pos.y);
}

function renderCanvas() {
    if (gCurrImg === '') return reRenderCanvasText()
    const elImg = new Image();
    elImg.src = gCurrImg; 
    elImg.onload = () => {

        gElCanvas.width = gElCanvas.clientWidth;
        gElCanvas.height = gElCanvas.clientWidth * (elImg.height / elImg.width);
        
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height);
        
        reRenderCanvasText()
    };
}

function didItClickedOnText(clickedPosX, clickedPosY) {
    const { pos, text, size } = gFontOptions;
    
    const textWidth = gCtx.measureText(text).width
    const textTop = pos.y - size; 

    const withinX = (clickedPosX >= pos.x) && (clickedPosX <= (pos.x + textWidth))
    const withinY = (clickedPosY >= textTop) && (clickedPosY <= pos.y)

    return withinX && withinY;
}

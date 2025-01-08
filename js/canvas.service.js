'use strict'

let gElCanvas;
let gCtx;
let gCurrImg
let gFontOptions

function initCanvas() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    /* TODO: hide canvas until picture selected*/

    gCurrImg = ''
    gFontOptions = {
        text: '',
        size: 14,
        font: 'Impact',
        fillColor: 'black',
        strokeColor: 'white',
    }
}

function reRenderCanvasText() {    
    let x = 30; let y = 50;
    
    gCtx.font = `${gFontOptions.size}px ${gFontOptions.font}`;
    gCtx.textAlign = 'top'
    gCtx.textBaseline = 'center'
    
    gCtx.strokeStyle = gFontOptions.strokeColor
    gCtx.fillStyle = gFontOptions.fillColor

    gCtx.fillText(gFontOptions.text, x, y);
    gCtx.strokeText(gFontOptions.text, x, y);
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
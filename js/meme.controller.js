'use strict'

let gCurrImg = ''

function onMemeTextChange(elText) {    
    let x = 30; let y = 50;
    gCtx.font = "20px Impact";
    gCtx.textAlign = 'top'
    gCtx.fillText(elText.value, x, y);
}

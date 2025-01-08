'use strict'

function onMemeTextChange(elText) {
    let x = 30; let y = 50;
    gCtx.font = "50px Arial";
    gCtx.fillText(elText.value, x, y);
}

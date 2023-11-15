'use strict'

var ball1Size = 100

function onBallClick() {
    ball1Size += 50
    console.log('hi')
    const ball1 = document.querySelector('.ball1')
    ball1.style.width = ball1Size + 'px'
    ball1.style.height = ball1Size + 'px'
    ball1.innerText = ball1Size

}
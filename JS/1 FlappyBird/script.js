'use strict'

let cvs = document.querySelector('#canvas');
let ctx = cvs.getContext('2d');

let bird = new Image();
let bg = new Image();
let fg = new Image();
let pipeUp = new Image();
let pipeBottom = new Image();

bird.src = 'img/bird.png';
bg.src = 'img/bg.png';
fg.src = 'img/fg.png';
pipeUp.src = 'img/pipeUp.png';
pipeBottom.src = 'img/pipeBottom.png';

let gap = 90;
let score = 0;
let record = 0;
let fly = new Audio();
let flyScore = new Audio();
let die = new Audio();
die.src = 'audio/die.mp3';
fly.src = 'audio/fly.mp3';
flyScore.src = 'audio/score.mp3';
// Позиция птички
let xPos = 10;
let yPos = 150;
let grav = 1.2;

document.addEventListener('keydown', function(evt) {
    console.log(evt.key);
    if(evt.key == ' ') {
        if(yPos > 25) {
        yPos -= 25;
        fly.play();
    } 
}
})

let pipe = [];
pipe[0] = {
    x: cvs.width,
    y: 0
}

function draw() {
    ctx.drawImage(bg, 0, 0);

    for(let i = 0; i < pipe.length; i++) {
        ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);
        ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap);
        pipe[i].x--;

        if(pipe[i].x == 125) {
            pipe.push({
                x: cvs.width,
                y: Math.floor(Math.random() * pipeUp.height) - pipeUp.height
            });
        }
        if(xPos + bird.width >= pipe[i].x && xPos <= pipe[i].x + pipeUp.width && (yPos <= pipe[i].y + pipeUp.height 
            || yPos + bird.height >= pipe[i].y + pipeUp.height + gap)) {
            die.play();
            setTimeout(() => location.reload(), 250);
        }
        if(score > record) {
            record = score;
            localStorage.setItem('record', score);
        }
        if(pipe[i].x == 5) {
            score ++;
            flyScore.play();
        }
    }

    ctx.drawImage(fg, 0, cvs.height - fg.height);
    ctx.drawImage(bird, xPos, yPos);

    yPos += grav;
    if(yPos + bird.height >= cvs.height - fg.height) {
    die.play();
    location.reload();
    }
    
    ctx.fillStyle = '#000';
    ctx.font = '24px Verdana';
    ctx.fillText('Счет: ' + score, 10, cvs.height - 20);
    requestAnimationFrame(draw);
}
pipeBottom.onload = draw;
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () {
mario.classlist.add('jump');

setTimeout(() { 
     mario.classlist.remove('jump');
 }, 500);
}

const loop = setInterval(()={

console.log('loop')

const pipePosition = pipe.offsetLeft;
const marioPosition = +window.getCmoputedStyle(mario).bottom.replace('px')

console.log(marioPosition);

if (PipePosition < 120 && PipePosition > 0 && marioPosition < 80) {

pipe.style.aniamtion = 'none';
pipe.style.left = '${pipePosition}px';

pipe.style.aniamtion = 'none';
pipe.style.bottom = '${pipePosition}px';

mario.src = ./imagens/game-over.png';
mario.style.width = '75px'
mario.style.marginLeft = '50px'

clearInterval(loop);
}

}, 10);

document.addEventListener('keydown' ,jump);


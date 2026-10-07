const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

function jump() {
mario.classlist.add('jump');

setTimeout(() => { 
     mario.classlist.remove('jump');
 }, 500);
}

document.addEventListener('keydown', jump);

const loop = setInterval( () => {
const pipePosition = pipe.offsetLeft;
const marioPosition = Number(
 window.getComputedStyle(mario).bottom.replace('px', '')
 );

if (PipePosition <= 120 && PipePosition > 0 && marioPosition < 80) {
pipe.style.aniamtion = 'none';
pipe.style.left = '${pipePosition}px';

pipe.style.animation = 'none';
pipe.style.bottom = '${marioPosition}px';

mario.src = './imagens/game-over.png';
mario.style.width = '75px';

clearInterval(loop);
 }
}, 10);


//variaveis do controle
const playBtn = document.querySelector('#playBtn');
const stopBtn = document.querySelector('#stopBtn');
const soundBtn = document.querySelector('#soundBtn');

var wavesurfer = WaveSurfer.create
({
    container: '#waveform',
    waveColor: 'white',
    progressColor: '#e1bb82',
    barWidth: 2,
    height: 90,
    responsive: true,
    hideScrollbar: true,
    barRadius: 2
});
wavesurfer.load('./audio/Warzone - Anno Domini Beats.mp3');

//Adiciona os elementos de escuta
playBtn.addEventListener('click',()=>{
    wavesurfer.playPause();
    if(playBtn.src.includes('play.png')){
        //altera para o botao pausa
        playBtn.src = './img/pause.png';
    }else
    {
        //altera a imagem para play
        playBtn.src = './img/play.png';
    }
});

stopBtn.addEventListener('click',()=>{
    wavesurfer.stop();
    playBtn.src = './img/play.png';
});

soundBtn.addEventListener('click',()=>{
    wavesurfer.toggleMute();
    if(soundBtn.src.includes('volume.png'))
    {
        //Alterar a imagem para mute
        soundBtn.src = './img/mute.png';
    }else
    {
        //altera para o botao de volume ativado
        soundBtn.src = './img/volume.png'
    }
});

//quando a musica acabar
wavesurfer.on('finish', function () {
    playBtn.src = './img/play.png';
    wavesurfer.stop();
});
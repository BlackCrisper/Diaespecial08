let index = 0;
const images = document.querySelectorAll('.carousel img');
const totalImages = images.length;

const audioPlayer = document.getElementById("audio-player");
const playBtn = document.getElementById("play-btn");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById('prev');
const musicName = document.getElementById("music-name");
const progressBar = document.getElementById("progress-bar");
let currentTrack = 0;




function nextImage() {
    index = (index + 1) % totalImages;
    document.getElementById('carousel').style.transform = `translateX(-${index * 300}px)`;
}

setInterval(nextImage, 3500);

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.getElementById('hearts').appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 500);

function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.animationDuration = Math.random() * 3 + 4 + 's';
    document.getElementById('petals').appendChild(petal);
    setTimeout(() => petal.remove(), 7000);
}
setInterval(createPetal, 500);

let musicList = [
    { name: 'Jorge & Mateus - Duas Metades', src: 'audio/Jorge & Mateus - Duas Metades.mp3' },
    { name: 'Jorge e Mateus-31_12', src: 'audio/Jorge e Mateus-31_12.mp3' },
];

function updateMusic() {
    audioPlayer.src = musicList[currentTrack].src;
    musicName.textContent = musicList[currentTrack].name;
    audioPlayer.play();
    playBtn.textContent = "❚❚";
}

playBtn.addEventListener('click', function() {
    if (audioPlayer.paused) {
        updateMusic();
    } else {
        audioPlayer.pause();
        playBtn.textContent = "►";
    }
});

nextBtn.addEventListener('click', function() {
    currentTrack = (currentTrack + 1) % musicList.length;
    updateMusic();
});

prevBtn.addEventListener('click', function() {
    currentTrack = (currentTrack - 1 + musicList.length) % musicList.length;
    updateMusic();
});

audioPlayer.addEventListener('timeupdate', function() {
    progressBar.value = (audioPlayer.currentTime / audioPlayer.duration) * 100;
});

progressBar.addEventListener('input', function() {
    audioPlayer.currentTime = (progressBar.value / 100) * audioPlayer.duration;
});



function calcularTempo() {
    const dataInicial = new Date("2023-12-08"); // Data inicial correta
    const dataAtual = new Date();
    
    // Calcular a diferença em milissegundos
    const diff = dataAtual - dataInicial;

    // Calcular os anos, meses e dias
    let anos = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    let meses = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30));
    let dias = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));

    // Calcular horas, minutos e segundos
    let horas = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let segundos = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("tempo-passado").textContent = 
        `${anos} anos, ${meses} meses, ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}

// Atualiza o tempo a cada 1000 milissegundos (1 segundo)
setInterval(calcularTempo, 1000);


// Código para controlar a abertura e fechamento da carta
const card = document.querySelector('.card');
const button = document.querySelector('.toggle-card-button');

button.addEventListener('click', () => {
  if (card.classList.contains('open')) {
    card.classList.remove('open');
    card.classList.add('close');
  } else {
    card.classList.remove('close');
    card.classList.add('open');
  }
});




function showLetter() {
    const letterText = `Minha Bhe,\n
           
        Desde o instante em que nossos olhares se cruzaram, meu mundo ganhou uma nova cor. Cada momento ao seu lado é como um presente que a vida me deu, e meu coração transborda de alegria ao lembrar de tudo o que já vivemos juntos. Você tem o poder de transformar qualquer dia comum em algo extraordinário, e eu sou grato por cada sorriso seu, cada gesto de carinho, e por ser quem você é.
        Eu te admiro profundamente, não só pela sua beleza, mas pela sua força, inteligência e pelo jeito único com que ilumina a vida de todos ao seu redor. Você é a minha inspiração, a razão de muitos dos meus sorrisos e a melhor escolha que já fiz. Com você, aprendi que o amor vai além das palavras, é um sentimento que se constrói a cada dia, e eu quero construir esse amor com você para o resto da minha vida.
        Neste Dia da Mulher, quero celebrar tudo o que você é: uma mulher incrível, forte, sensível e única que encanta o mundo. Eu te amo mais do que as palavras podem expressar, e prometo sempre te valorizar, te apoiar e te fazer feliz, porque você merece o mundo.
        Eu sei que você vem me pedindo presentes feitos à mão, mas você sabe que não sou bom de redação e minha letra é feia kkkk... Então, fiz algo que sei fazer e foi feito à mão, com todo o carinho do meu coração. Espero que goste! 💖

        Eu te amo infinitamente! 💖`;

    const letterElement = document.getElementById('letter');
    letterElement.style.display = 'block';
    letterElement.innerHTML = '';
    document.body.style.overflow = 'auto';

     let i = 0;
    function typeWriter() {
        if (i < letterText.length) {
            letterElement.innerHTML += letterText.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    typeWriter();
}


function showPopup() {
    document.getElementById('foodPopup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function closePopup() {
    document.getElementById('foodPopup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

// Código para adicionar e remover a classe "active" ao clicar na opção de comida
document.querySelectorAll('.food-option').forEach(option => {
    option.addEventListener('click', () => {
      option.classList.toggle('active');
    });
  });
  

function sendMessage(food) {
    const message = `Oii meu amor, vamos comer ${food}, pode pedir pra gente?`;
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "+55079999982803"; // Substitua pelo seu número de telefone
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
}
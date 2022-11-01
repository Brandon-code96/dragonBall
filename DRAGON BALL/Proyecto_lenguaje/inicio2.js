const sonidos = document.getElementById('sonido');

document.addEventListener('keydown', function(evento){
    if (evento = 'enter') {
        sonidos.innerHTML += '<audio src="audio/Vamos a buscar las esferas del dragon.mp3"autoplay></audio>'
    }
} )

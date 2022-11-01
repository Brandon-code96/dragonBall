const videos = document.getElementById('videos');

document.addEventListener('keydown', function(evento){
    if (evento = 'enter' ) {
        videos.innerHTML += '<video autoplay loop src="video/dbz.mp4"></video>'
    }
} )
alert('Presiona F11 para una mejor experiencia');

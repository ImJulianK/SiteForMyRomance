function Esconde1(){
  var foto = document.querySelector(".juju");
  var texto = document.querySelector(".txts");
  var extra = document.querySelector(".extra");
  foto.style.display = 'flex';
  texto.style.display = 'none';
  extra.style.display = 'none';
  console.log("Entrou na funcao")
}
function Esconde2(){
  var foto = document.querySelector(".juju");
  var texto = document.querySelector(".txts");
  var extra = document.querySelector(".extra");
  foto.style.display = 'none';
  texto.style.display = 'block';
  extra.style.display = 'none';
  console.log("Entrou na funcao")
}
function Esconde3(){
  var foto = document.querySelector(".juju");
  var texto = document.querySelector(".txts");
  var extra = document.querySelector(".extra");
  foto.style.display = 'none';
  texto.style.display = 'none';
  extra.style.display = 'block';
  console.log("Entrou na funcao")
}


var counter = 1;
setInterval(function () {
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if (counter > 10) {
    counter = 1;
  }
}, 5000);

var i = 1;
var nextSong = "";
var nomeMusica = "";
function setup() {
  document.getElementById('audio').addEventListener('ended', function () {
    i++;
    nextSong = "assets/audio/musica" + i + ".mp3";
    audioPlayer = document.getElementById('audio');
    audioPlayer.src = nextSong;
    audioPLayer.load();
    audioPlayer.play();
    if (i > 12) // this is the end of the songs.
    {
      i = 1;
    }
  }, false);
}

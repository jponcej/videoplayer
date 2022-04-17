const $video = document.querySelector("#video");
const $play = document.querySelector("#play");
const $pause = document.querySelector("#pause");
const $backward = document.querySelector("#backward");
const $forward = document.querySelector("#forward");

$play.addEventListener("click", handlePlay);
$pause.addEventListener("click", handelPause);
$backward.addEventListener("click", handleBackward);
$forward.addEventListener("click", handleForward);

function handlePlay(params) {
  $video.play(); //metodo play
  $play.hidden = true;
  $pause.hidden = false;
  console.log("hola");
}
function handelPause(params) {
  $pause.hidden = true;
  $play.hidden = false;
  $video.pause(); // metodo pause
}

function handleBackward() {
  //$video.currentTime=$video.currentTime -10
  $video.currentTime -= 10;
  console.log("atrasar 10 segundos", $video.currentTime);
}

function handleForward() {
  $video.currentTime += 10;
  console.log("adelantar 10 segundos", $video.currentTime);
}

const $progress = document.querySelector("#progress");

$video.addEventListener("loadedmetadata", handleLoaded); //evento de metadatos
$video.addEventListener("timeupdate", handleTimeUpdate); //evento de progreso del video

function handleLoaded() {
  $progress.max = $video.duration;
  console.log("cargo el video", $video.duration);
}

function handleTimeUpdate() {
  $progress.value = $video.currentTime;
  console.log("tiempo actual", $video.currentTime);
}

$progress.addEventListener("input", handleInput);

function handleInput() {
  $video.currentTime = $progress.value;
  console.log($progress.value);
}

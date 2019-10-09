const clap = document.querySelector("#aClap");
document.body.addEventListener("keydown", playSound);
console.log(clap);

const channel1 = [];

function playSound(event, sound) {
  if (event.keyCode === 65) {
    sound.currentTime = 0;
    sound.play();
    const time = Date.now();
    channel1.push({ key: event.keyCode, time });
  }
}

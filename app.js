let clapAudio = new Audio("./sounds/clap.wav");
let hihat = new Audio('./sounds/hihat.wav');
let kick = new Audio('./sounds/kick.wav');
let openhat = new Audio('./sounds/openhat.wav');
let ride = new Audio('./sounds/ride.wav');
let snare= new Audio('./sounds/snare.wav');
let tink = new Audio('./sounds/tink.wav');
let tom = new Audio('./sounds/tom.wav');
let boom = new Audio("./sounds/boom.wav")

const clapButton = document.getElementById("clap");
const hihatButton = document.getElementById("hihat");
const kickButton = document.getElementById("kick");
const openhatButton = document.getElementById("openhat");
const rideButton = document.getElementById("ride");
const snareButton = document.getElementById("snare");
const tinkButton = document.getElementById("tink");
const tomButton = document.getElementById("tom");
const boomButton = document.getElementById("boom")

clapButton.addEventListener('click', () => {
  clapAudio.load();
  clapAudio.play();
});

hihatButton.addEventListener('click', () => {
  hihat.load();
  hihat.play();
});

kickButton.addEventListener('click', () => {
  kick.load();
  kick.play();
});

openhatButton.addEventListener('click', () => {
  openhat.load();
  openhat.play();
});

rideButton.addEventListener('click', () => {
  ride.load();
  ride.play();
});

snareButton.addEventListener('click', () => {
  snare.load();
  snare.play();
});

tinkButton.addEventListener('click', () => {
  tink.load();
  tink.play();
});

tomButton.addEventListener('click', () => {
  tom.load();
  tom.play();
});

boomButton.addEventListener('click', () => {
  boom.load();
  boom.play();
})

// Play drum by keyboard press

document.addEventListener('keypress', () => {
  if (event.key == "a") {
    boom.load();
    boom.play();
  } 
  if(event.key == "q"){
    clapAudio.load();
    clapAudio.play();
  } 
  if (event.key == "w") 
    hihat.load();
    hihat.play(); {
  } if (event.key == "e") 
    kick.load();
    kick.play(); {
  } if (event.key == "r") 
    openhat.load();
    openhat.play(); {
  } if (event.key == "s")  
    ride.load();
    ride.play(); {
  } if (event.key == "d")
    snare.load();
    snare.play(); {
  } if (event.key == "f")  
    tink.load();
    tink.play(); {
  } if (event.key == "z") 
    tom.load();
    tom.play(); {
  }
});

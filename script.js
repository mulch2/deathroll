var lastroll = 100;
var currentroll = 100;

function roll() {
  var roll = getRandom(currentroll);

  if (roll == 1) {
    if (currentroll != 1){
      rollarea.classList.remove("glow-animation-green");
      rollarea.classList.remove("glow-animation-red");
      void rollarea.offsetWidth;
      rollarea.classList.add("glow-animation-red");
    }
  } else {
    rollarea.classList.remove("glow-animation-green");
    rollarea.classList.remove("glow-animation-red");
    void rollarea.offsetWidth;
    rollarea.classList.add("glow-animation-green");
  }

  rollarea.style.webkitAnimationPlayState="running";
  setall(roll);
}

function undo() {
  setall(lastroll);
}

function setall(roll) {
  lastroll = currentroll;
  currentroll = roll;
  rollarea.innerHTML = roll;
  rollarea.style.color = "white";
  document.getElementById('range').innerHTML = "1-" + String(roll);
  document.getElementById('odds').innerHTML = String(((1 / roll) * 100).toPrecision(3)) + "%";
}

function animateRoll() {
  rollarea.style.color = "#ffe082"
}

function getRandom(max) {
  return Math.floor((Math.random() * max) + 1);
}

function reset() {
  setall(100);
}

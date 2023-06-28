let zero = [25, 5, 3];
let p = document.getElementById("p");
let WorkBtnMais = document.getElementById("mais");
let WorkBtnMenos = document.getElementById("menos");

let P = document.getElementById("p-02");
let StopBtnMais = document.getElementById("mais-02");
let StopBtnMenos = document.getElementById("menos-02");

let Pp = document.getElementById("p-03");
let SessionsBtnMais = document.getElementById("mais-03");
let SessionsBtnMenos = document.getElementById("menos-03");

const add = (key) => {
  switch (key) {
    case "Work":
      zero[0]++;
      p.innerHTML = zero[0];
      break;
    case "Stop":
      zero[1]++;
      P.innerHTML = zero[1];
      break;
    case "Sessions":
      zero[2]++;
      Pp.innerHTML = zero[2];
      break;
  }
};

const remove = (key) => {
  switch (key) {
    case "Work":
      zero[0]--;
      p.innerHTML = zero[0];
      break;
    case "Stop":
      zero[1]--;
      P.innerHTML = zero[1];
      break;
    case "Sessions":
      zero[2]--;
      Pp.innerHTML = zero[2];
      break;
  }
};

function igual(key) {
  if (key === "Work") {
    zero[0] === 0
      ? WorkBtnMenos.setAttribute("disabled", "")
      : WorkBtnMenos.removeAttribute("disabled", "");
    return;
  }

  if (key === "Stop") {
    zero[1] === 0
      ? StopBtnMenos.setAttribute("disabled", "")
      : StopBtnMenos.removeAttribute("disabled", "");
    return;
  }

  if (key === "Sessions") {
    zero[2] === 0
      ? SessionsBtnMenos.setAttribute("disabled", "")
      : SessionsBtnMenos.removeAttribute("disabled", "");
    return;
  }
}

igual("Work");
igual("Stop");
igual("Sessions");

WorkBtnMais.addEventListener("click", () => {
  add("Work");
  igual("Work");
});

WorkBtnMenos.addEventListener("click", () => {
  remove("Work");
  igual("Work");
});

StopBtnMais.addEventListener("click", () => {
  add("Stop");
  igual("Stop");
});

StopBtnMenos.addEventListener("click", () => {
  remove("Stop");
  igual("Stop");
});

SessionsBtnMais.addEventListener("click", () => {
  add("Sessions");
  igual("Sessions");
});

SessionsBtnMenos.addEventListener("click", () => {
  remove("Sessions");
  igual("Sessions");
});

let continuar = document.getElementById("section-01");
let trabalho = document.getElementById("section-02");
let section = document.getElementById("section-03");
let comeca = document.getElementById("comeca");
let Inicio = document.getElementById("inicio");
let Trabalho = document.getElementById("trabalho");
let iniciar = document.getElementById("iniciar");
let ss = 0;
let tempo = 1000;
let cron;

function start() {
  cron = setInterval(() => {
    timer();
  }, tempo);
}

function Continuar() {
  continuar.style.display = "none";
  section.style.display = "none";
  trabalho.style.display = "block";
  pausa.style.display = "none";
  play.style.display = "none";
  iniciar.style.display = "block";
}

comeca.addEventListener("click", () => {
  Continuar();
  contado();
});

function volta() {
  continuar.style.display = "block";
  trabalho.style.display = "none";
}

function contado() {
  Trabalho.innerHTML = zero[0] < 10 ? "0" + zero[0] + ":00" : zero[0] + ":00";
}

function CONTADO() {
  TRABALHO.innerHTML = zero[1] < 10 ? "0" + zero[1] + ":00" : zero[1] + ":00";
}

let pausa = document.getElementById("pausa");
let play = document.getElementById("start");
var minute = 0;
var seconds = 0;
var timer = 0;
var duration = 0;

let myVar;

function startTimer(duration, display, name) {
  timer = duration;

  myVar = setInterval(async function () {
    minute = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);
    minute = minute < 10 ? "0" + minute : minute;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    display.textContent = minute + ":" + seconds;
    if (--timer < 0) {
      const next = timer + 1;
      if (next === 0) {
        clearInterval(myVar);

        switch (name) {
          case "Work":
            work();
            break;
          case "Stop":
            stop();
            break;
        }
      }
    }
  }, 1000);
}

const work = () => {
  myVar = setInterval(CONTADO, 100);
  section.style.display = "block";
  trabalho.style.display = "none";
  iniciar.style.display = "none";
  pausa.style.display = "none";
  play.style.display = "none";
  PAUSA.style.display = "none";
  PLAY.style.display = "none";
  INICIAR.style.display = "block";
  return;
};

const stop = () => {
  contado();
  section.style.display = "none";
  trabalho.style.display = "block";
  iniciar.style.display = "block";
  INICIAR.style.display = "none";
  return;
};

const as = (index, name, session) => {
  minute = 0;
  seconds = 0;
  timer = 0;
  duration = 0;
  myVar = null;

  duration = 60 * zero[index];
  display = document.getElementById(name);
  startTimer(duration, display, session);
};

iniciar.addEventListener("click", () => {
  as(0, "trabalho", "Work");
  pausa.style.display = "block";
  iniciar.style.display = "none";
});

function pauseTime(name) {
  clearInterval(name);
}

pausa.addEventListener("click", () => {
  pauseTime(myVar);
  pausa.style.display = "none";
  play.style.display = "block";
});

Inicio.addEventListener("click", () => {
  volta();
  pauseTime(myVar);
  seconds = 0;
  mim = 0;
  timer = null;
});

function start(pauseTime, start) {
  pauseTime.style.display = "block";
  start.style.display = "none";
  duration = timer;
  startTimer(duration, display);
}

play.addEventListener("click", () => {
  start(pausa, play);
});

let TRABALHO = document.getElementById("trabalho-02");
let PAUSA = document.getElementById("pausa-02");
let PLAY = document.getElementById("start-02");
let INICIAR = document.getElementById("iniciar-02");
let INICIO = document.getElementById("inicio-02");

INICIAR.addEventListener("click", () => {
  clearInterval(myVar);
  as(1, "trabalho-02", "Stop");
  PAUSA.style.display = "block";
  INICIAR.style.display = "none";
});

PAUSA.addEventListener("click", () => {
  pauseTime(myVar);
  PAUSA.style.display = "none";
  PLAY.style.display = "block";
});

INICIO.addEventListener("click", () => {
  VOLTA();
  pauseTime(myVar);
  seconds = 0;
  minute = 0;
  timer = null;
});

PLAY.addEventListener("click", () => {
  start(PAUSA, PLAY);
});

function VOLTA() {
  continuar.style.display = "block";
  section.style.display = "none";
}

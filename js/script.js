let zero = 25;let zero = 25;
let p = document.getElementById('p');
let bntMais = document.getElementById('mais');
let bntMenos = document.getElementById('menos');

const add = {
    Add(){
        zero++
        p.innerHTML = zero
    },
    remove(){
        zero--
        p.innerHTML = zero
    },
    ADD(){
        Zero++
        P.innerHTML = Zero
    },
    REMOVER(){
        Zero--
        P.innerHTML = Zero
    },
    ADd(){
        ZERO++
        Pp.innerHTML = ZERO
    },
    REMOVer(){
        ZERO--
        Pp.innerHTML = ZERO
    }
}

bntMais.addEventListener('click', () => {
    add.Add()
    igual()
});

bntMenos.addEventListener('click', () => {
    add.remove()
    igual()
});

function igual(){
    if(zero === 0){
        bntMenos.style.display = 'none'
    } else {
        bntMenos.style.display = 'inherit'
    }
}

igual()

// --------------------------------------------------------------------- //

let Zero = 5;
let P = document.getElementById('p-02');
let BntMais = document.getElementById('mais-02');
let BntMenos = document.getElementById('menos-02');

BntMais.addEventListener('click', () => {
    add.ADD()
    Igual()
});

BntMenos.addEventListener('click', () => {
    add.REMOVER()
    Igual()
});

function Igual(){
    if(Zero === 0){
        BntMenos.style.display = 'none'
    } else {
        BntMenos.style.display = 'inherit'
    }
}

Igual()

// ------------------------------------------------------------------ //

let ZERO = 3;
let Pp = document.getElementById('p-03');
let BntMaiss = document.getElementById('mais-03');
let BntMenoss = document.getElementById('menos-03');

BntMaiss.addEventListener('click', () => {
    add.ADd()
    IGUAL()
});

BntMenoss.addEventListener('click', () => {
    add.REMOVer()
    IGUAL()
});

function IGUAL(){
    if(ZERO === 0){
        BntMenoss.style.display = 'none'
    } else {
        BntMenoss.style.display = 'inherit'
    }
}

IGUAL()

// -----------------------------------------------------------------------------//

let continuar = document.getElementById("section-01");
let trabalho = document.getElementById("section-02");
let section = document.getElementById('section-03');
let comeca = document.getElementById('comeca');
let Inicio = document.getElementById('inicio');
let Trabalho = document.getElementById('trabalho');
let iniciar = document.getElementById('iniciar');
let ss = 0;
let tempo = 1000;
let cron ;

function start() {
    cron = setInterval(() => { timer(); }, tempo);
};

function Continuar(){
    continuar.style.display = 'none'
    section.style.display = 'none'
    trabalho.style.display= 'block'
    pausa.style.display = 'none'
    play.style.display = 'none'
    iniciar.style.display = 'block'
};

comeca.addEventListener('click', () => {
    Continuar()
    contado()
});

function volta(){
    continuar.style.display = 'block'
    trabalho.style.display = 'none'
};

function contado(){
    Trabalho.innerHTML = zero + ':00' 
    console.log(Trabalho)
};

function CONTADO(){
    TRABALHO.innerHTML = Zero + ':00'
    console.log(Trabalho)
}

var myVaR

// ------------------------------------------------ //
let pausa = document.getElementById('pausa');
let play = document.getElementById('start');
var mim = 0;
var seconds = 0;
var timer = 0;
var duration = 0;

let myVar;

function startTimer(duration, display) {
    timer = duration;

    myVar = setInterval(function () {
        mim = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        mim = mim < 10 ? "0" + mim : mim;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = mim + ":" + seconds;
        if (--timer < 0) {
            timer = 0;
            if(timer == 0){
                myVaR = setInterval(CONTADO, 100);
                clearInterval(myVar)
                
                section.style.display = 'block'
                trabalho.style.display= 'none'
                iniciar.style.display= 'none'
                pausa.style.display= 'none'
                play.style.display= 'none'
                PAUSA.style.display = 'none'
                PLAY.style.display = 'none'
                INICIAR.style.display = 'block'
            }
        }
    }, 1000);
};

iniciar.addEventListener('click', () => {
    as()
    pausa.style.display = 'block'
    iniciar.style.display = 'none'
});

const as = function () {
    duration = 60 * zero; // Converter para segundos
        display = document.getElementById('trabalho'); // selecionando o timer
    startTimer(duration, display); // iniciando o timer
};

function stop(){
    clearInterval(myVar)
};

pausa.addEventListener('click', () => {
    stop()
    pausa.style.display = 'none'
    play.style.display = 'block'
});

Inicio.addEventListener('click', () => {
    volta()
    stop()
    seconds = 0;
    mim = 0;
    timer = null;
});

function start(){
    pausa.style.display = 'block'
    play.style.display = 'none'
    duration = timer
    startTimer(duration, display); // iniciando o timer
};

play.addEventListener('click', () => {
    start()
});

// ---------------------------------------------------------------------------------------- //
let TRABALHO = document.getElementById('trabalho-02');
let PAUSA = document.getElementById('pausa-02');
let PLAY = document.getElementById('start-02');
let INICIAR = document.getElementById('iniciar-02');
let INICIO = document.getElementById('inicio-02');
var minuto = 0;
var Seconds = 0;
var Timer = 0;
var Duration = 0;

let MYVar;

function StartTimer(Duration, Display) {
    Timer = Duration;

    MYVar = setInterval(function () {
        minuto = parseInt(Timer / 60, 10);
        Seconds = parseInt(Timer % 60, 10);
        minuto = minuto < 10 ? "0" + minuto : minuto;
        Seconds = Seconds < 10 ? "0" + Seconds : Seconds;
        Display.innerHTML = minuto + ":" + Seconds;
        if (--Timer < 0) {
            Timer = 0;
        }
    }, 1000);
};

INICIAR.addEventListener('click', () => {
    clearInterval(myVaR)
    bs()
    PAUSA.style.display = 'block'
    INICIAR.style.display = 'none'
});

const bs = function () {
    Duration = 60 * Zero; // Converter para segundos
        Display = document.getElementById('trabalho-02'); // selecionando o timer
    StartTimer(Duration, Display); // iniciando o timer
};

function Stop(){
    clearInterval(MYVar)
};

PAUSA.addEventListener('click', () => {
    Stop()
    PAUSA.style.display = 'none'
    PLAY.style.display = 'block'
});

INICIO.addEventListener('click', () => {
    VOLTA()
    Stop()
    Seconds = 0;
    minuto = 0;
    Timer = null;
});

function Start(){
    PAUSA.style.display = 'block'
    PLAY.style.display = 'none'
    Duration = Timer
    StartTimer(Duration, Display); // iniciando o timer
};

PLAY.addEventListener('click', () => {
    Start()
});

function VOLTA(){
    continuar.style.display = 'block'
    section.style.display = 'none'
}

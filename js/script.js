let zero = 25;
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
let comeca = document.getElementById('comeca');
let inicio = document.getElementById('inicio')
let Trabalho = document.getElementById('trabalho');
let iniciar = document.getElementById('iniciar');
let ss = 0;
let tempo = 1000;
let cron ;

function start() {
    cron = setInterval(() => { timer(); }, tempo);
}

function Continuar(){
    continuar.style.display = 'none'
    trabalho.style.display= 'block'
}

comeca.addEventListener('click', () => {
    Continuar()
    contado()
})

function volta(){
    continuar.style.display = 'block'
    trabalho.style.display= 'none'
}

inicio.addEventListener('click', () => {
    volta()
})

function contado(){
    Trabalho.innerHTML = zero + ':00' 
    console.log(Trabalho)
}


function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.innerHTML = minutes + ":" + seconds;
        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

iniciar.addEventListener('click', () => {
    as()
})

const as = function () {
    var duration = 60 * zero; // Converter para segundos
        display = document.getElementById('trabalho'); // selecionando o timer
    startTimer(duration, display); // iniciando o timer
};
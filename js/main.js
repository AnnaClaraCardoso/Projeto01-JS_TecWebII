const leitor_hora = document.querySelector('.leitor-hora');
const hora = document.querySelector('.leitor-hora .hora .hr');
const minutos = document.querySelector('.leitor-hora .minutos .min');

const hr_up = document.querySelector('.leitor-hora .hora .hr-up');
const hr_down = document.querySelector('.leitor-hora .hora .hr-down');

const min_up = document.querySelector('.leitor-hora .minutos .min-up');
const min_down = document.querySelector('.leitor-hora .minutos .min-down');

const botao = document.querySelector('button');

// variáveis que processarão os valores dos campos hora e minutos
let elemento_hora = 0;
let elemento_minutos = 0;

// Monitorar incrementos e decrementos
hr_up.addEventListener('click', incrementa_hora);
hr_down.addEventListener('click', decrementa_hora);
min_up.addEventListener('click', incrementa_minutos);
min_down.addEventListener('click', decrementa_minutos);

// Monitorar mudanças por teclado nos campos
hora.addEventListener('change', corrigir_hora);
minutos.addEventListener('change', corrigir_minutos);

botao.addEventListener('click', cumprimento);


function incrementa_hora () {
    elemento_hora++;
    if(elemento_hora > 23) {
        elemento_hora = 0;
    }
    setTime();
}

function decrementa_hora () {
    elemento_hora--;
    if(elemento_hora < 0) {
        elemento_hora = 23;
    }
    setTime();
}

function incrementa_minutos () {
    elemento_minutos++;
    if(elemento_minutos > 59 && elemento_hora < 23) {
        elemento_minutos = 0;
        elemento_hora++;
    } else if (elemento_minutos > 59 && elemento_hora == 23) {
        elemento_minutos = 0;
        elemento_hora = 0;
    }
    setTime();
}

function decrementa_minutos () {
    elemento_minutos--;
    if(elemento_minutos < 0 && elemento_hora > 0) {
        elemento_minutos = 59;
        elemento_hora--;
    } else if (elemento_minutos < 0 && elemento_hora == 0) {
        elemento_minutos = 59;
        elemento_hora = 23;
    }
    setTime();
}

// função que formata o valor digitado nos campos
function formatTime (horario) {
    if (horario < 10) {
        horario = ("00" + horario).slice(-2);
    }
    return horario;
}

// função que corrige valores inválidos de horas
function corrigir_hora (e) {
    if (e.target.value > 23) {
        e.target.value = 23;
    } else if (e.target.value < 0) {
        e.target.value = '00';
    }

    elemento_hora = e.target.value;
}

// função que corrige valores inválidos de minutos
function corrigir_minutos (e) {
    if(e.target.value > 59) {
        e.target.value = 59;
    } else if (e.target.value < 0) {
        e.target.value = "00";
    }

    elemento_minutos = e.target.value;
}

// Função que atribui os valores processados nos campos hora e minutos
function setTime () {
    hora.value = formatTime(elemento_hora);
    minutos.value = formatTime(elemento_minutos);
    leitor_hora.dataset.res = formatTime(elemento_hora) + ':' + formatTime(elemento_minutos);
}

function cumprimento () {
    /* 
        Função do botão que apresenta uma mensagem de 'Bom dia', 'Boa tarde' 
        ou 'Boa noite' de acordo com a hora entrada.
    */
    var h; 
    h = parseInt(elemento_hora);
    var res = document.querySelector('p#res');
 	if (h >= 18 && h < 24) {
 		res.innerHTML = " Boa Noite ";
 	}
 	
 	if (h >= 12 && h < 18) {
 		res.innerHTML = " Boa Tarde ";
 	}
 	
 	if (h >= 0 && h <12) {
 		res.innerHTML = " Bom Dia ";
 	}
}

// Possíveis alterações futuras:

    // adaptar a função cumprimento() para subtituir o botão pela mensagem;
    /* adicionar uma função que subtitui a mensagem pelo botão sempre que os campos são alterados, assim, 
    dando a chance para um novo teste */
    // limitar o número de algarismos que podem ser ditados nos inputs do tipo number

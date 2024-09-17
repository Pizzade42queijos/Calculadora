"use strict";
// Variável que armazena o valor atual do visor da calculadora
let valorVisor = '';
let audio = new Audio('audios/8000.mp3');
function adicionarNumero(numero) {
    valorVisor += numero; // Adiciona o número ao valor atual do visor
    const visor = document.getElementById('visor'); // Obtém o campo do visor
    visor.value = valorVisor; // Atualiza o visor com o novo valor
}
function adicionarOperador(operador) {
    valorVisor += operador; // Adiciona o operador ao valor atual do visor
    const visor = document.getElementById('visor'); // Obtém o campo do visor
    visor.value = valorVisor; // Atualiza o visor com o novo valor
}
function calcular() {
    try {
        valorVisor = eval(valorVisor).toString(); // Avalia a expressão matemática e converte para string
        const visor = document.getElementById('visor'); // Obtém o campo do visor
        visor.value = valorVisor; // Exibe o resultado no visor
        maisDeOitoMil(visor.value);
    }
    catch (e) {
        const visor = document.getElementById('visor');
        visor.value = 'Erro'; // Exibe "Erro" caso a expressão seja inválida
        valorVisor = ''; // Limpa o valorVisor
    }
}
function limparVisor() {
    valorVisor = ''; // Limpa o valor armazenado
    const visor = document.getElementById('visor'); // Obtém o campo do visor
    visor.value = ''; // Limpa o texto no visor
}

function maisDeOitoMil(valor){
    if(valor>8000){
        audio.play();
    }
}

window.document.body.style.background = 'orange';
window.onload = function(){
    document.getElementById('imgcontain').innerHTML = '<img width="300" height="300" src="https://png.pngtree.com/png-vector/20230303/ourmid/pngtree-dragon-ball-z-vector-super-illustration-png-image_6627050.png">';
    document.body.style.display = 'flex';
    document.body.style.justifyContent = 'space-around';
    document.getElementsByClassName('calculadora').style.backgroundColor = 'blue';
}


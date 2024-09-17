var displayImc= true;
var displayGasolina = false;
var displayMoedas = false;

function calcular(){
    if (displayImc){
        Resultado(Imc());
    }
    else if(displayGasolina){
        Resultado(Gasolina());
    }
    else if(displayMoedas){
        Resultado(Moedas());
    }
}

function displayImc(){
    var displayImc= true;
    var displayGasolina = false;
    var displayMoedas = false;
    document.getElementsByClassName("gasolina").style.display = none;
    document.getElementsByClassName("moedas").style.display = none;
    document.getElementsByClassName("imc").style.display = inline-flex;
}

function displayGasolina(){
    var displayImc= false;
    var displayGasolina = true;
    var displayMoedas = false;
    document.getElementsByClassName("gasolina").style.display = inline-flex;
    document.getElementsByClassName("moedas").style.display = none;
    document.getElementsByClassName("imc").style.display = none;
}

function displayMoedas(){
    var displayImc= false;
    var displayGasolina = true;
    var displayMoedas = false;
    document.getElementsByClassName("gasolina").style.display = none;
    document.getElementsByClassName("moedas").style.display = inline-flex;
    document.getElementsByClassName("imc").style.display = none;
}

function Imc() {
    const peso = document.getElementById('input1').value;
    const altura = document.getElementById('input2').value;
    const imc = peso / (altura * altura);
    let categoria = '';
    if (imc < 18.5) {
      categoria = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
      categoria = 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
      categoria = 'em Sobrepeso';
    } else {
      categoria = 'Obeso';
    }
    return 'seu imc é '+imc+', que te classifica como '+categoria;

}



function Resultado(text) {
    document.getElementById('myTextarea').value = text;
  }
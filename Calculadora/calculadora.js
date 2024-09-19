function displayImc() {
  document.getElementsByClassName("gasolina")[0].style.display = "none";
  document.getElementsByClassName("moedas")[0].style.display = "none";
  document.getElementsByClassName("imc")[0].style.display = "flex";
  document.getElementsByClassName("imc")[0].style.alignItems = "center";
  document.getElementsByClassName("imc")[0].style.justifyContent = "space-between";
  document.getElementsByClassName("imc")[0].style.flexDirection = "column";
  
}

function displayGasolina() {
  document.getElementsByClassName("moedas")[0].style.display = "none";
  document.getElementsByClassName("imc")[0].style.display = "none";
  document.getElementsByClassName("gasolina")[0].style.display = "flex";
  document.getElementsByClassName("gasolina")[0].style.alignItems = "center";
  document.getElementsByClassName("gasolina")[0].style.justifyContent = "space-between";
  document.getElementsByClassName("gasolina")[0].style.flexDirection = "column";
}

function displayMoedas() {
  document.getElementsByClassName("gasolina")[0].style.display = "none";
  document.getElementsByClassName("imc")[0].style.display = "none";
  document.getElementsByClassName("moedas")[0].style.display = "flex";
  document.getElementsByClassName("moedas")[0].style.alignItems = "center";
  document.getElementsByClassName("moedas")[0].style.justifyContent = "space-between";
  document.getElementsByClassName("moedas")[0].style.flexDirection = "column";
}



function Imc() {
  const inputPeso = document.getElementById('inputPeso');
  const inputAltura = document.getElementById('inputAltura');
  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);
  console.log(peso)
  console.log(altura)

  const imc = Number(peso / (altura * altura));
  console.log(imc)

  try {
    if (imc < 0.1){
      categoria = 'alguém que simplesmente não existe!'
    }
    else if (imc < 18.5) {
      categoria = 'Abaixo do peso';
  } else if (imc >= 18.5 && imc < 24.9) {
      categoria = 'Peso normal';
  } else if (imc >= 25 && imc < 29.9) {
      categoria = 'em Sobrepeso';
  } else{
      categoria = 'Obeso';
  }
  Resultado(`seu imc é ${imc.toFixed(1)} que te classifica como ${categoria}`);
  } catch (error) {
    Erro();
  }
}

function calcularGas(){
  let p = '';
  const inputGasolina = document.getElementById('inputGas');
  const inputAlcool = document.getElementById('inputAlco');
  const valorGasolina = Number(inputGasolina.value);
  const valorAlcool = Number(inputAlcool.value);
  const proporcao = (valorAlcool / valorGasolina);

  try {
    if (proporcao < 0.7) {
      p = "Álcool";
    } else {
      p = "Gasolina";
    }
  Resultado(`Dada a proporção de ${proporcao.toFixed(2)} entre Álcool e Gasolina, será melhor abastecer com ${p}`);
  }catch (error) {
    Erro();
  }
}


function calcularMoedas(){
  const inputReais = document.getElementById('inputReais');
  const inputDolar = document.getElementById('inputDolar');
  const valorEmReais = Number(inputReais.value);
  const cotacaoDolar = Number(inputDolar.value);

  const valorTranslatado = (valorEmReais / cotacaoDolar);
  if (valorTranslatado){
    Resultado(`Sua quantia de ${valorEmReais.toFixed(2)} Reais Brasileiros equivale à ${valorTranslatado.toFixed(2)} Dólares Americanos`)
  }
  else{
    Erro();
  }
}

function Resultado(phase) {
  document.getElementById('resultado').textContent = phase;
}

function Erro(){
  document.getElementById('resultado').textContent = 'Erro! algo foi preenchido incorretamente.';
}
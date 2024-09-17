var imcVar = true;
var GasolinaVar = false;
var MoedasVar = false;
let resultado = '';

function calcular() {
  if (imcVar) {
    Resultado();
  }
  else if (GasolinaVar) {
    Resultado(Gasolina());
  }
  else if (MoedasVar) {
    Resultado(Moedas());
  }
}

function displayImc() {
  imcVar = true;
  GasolinaVar = false;
  MoedasVar = false;
  document.getElementsByClassName("gasolina")[0].style.display = "none";
  document.getElementsByClassName("moedas")[0].style.display = "none";
  document.getElementsByClassName("imc")[0].style.display = "flex";
}

function displayGasolina() {
  imcVar = false;
  GasolinaVar = true;
  MoedasVar = false;
  document.getElementsByClassName("gasolina")[0].style.display = "flex";
  document.getElementsByClassName("moedas")[0].style.display = "none";
  document.getElementsByClassName("imc")[0].style.display = "none";
}

function displayMoedas() {
  imcVar = false;
  GasolinaVar = true;
  MoedasVar = false;
  document.getElementsByClassName("gasolina")[0].style.display = "none";
  document.getElementsByClassName("moedas")[0].style.display = "flex";
  document.getElementsByClassName("imc")[0].style.display = "none";
}



function Imc() {
  const inputPeso = document.getElementById('peso');
  const inputAltura = document.getElementById('altura');
  const peso = (inputPeso.value);
  const altura = parseFloat(inputAltura.value);
  console.log(peso)
  console.log(altura)

  const imc = peso / (altura * altura);
  console.log(imc)

  if (imc < 18.5) {
    categoria = 'Abaixo do peso';
  } else if (imc >= 18.5 && imc < 24.9) {
    categoria = 'Peso normal';
  } else if (imc >= 25 && imc < 29.9) {
    categoria = 'em Sobrepeso';
  } else {
    categoria = 'Obeso';
  }
  return resultado = `seu imc é ${imc.toFixed(1)} que te classifica como ${categoria}`;

}

function Resultado() {
  document.getElementById('resultado').textContent = Imc();
}
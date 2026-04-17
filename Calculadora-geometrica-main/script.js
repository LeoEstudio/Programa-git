function calcularTrapecio() {
  const b1 = parseFloat(document.getElementById('trap-base1').value);
  const b2 = parseFloat(document.getElementById('trap-base2').value);
  const h = parseFloat(document.getElementById('trap-altura').value);
  const l1 = parseFloat(document.getElementById('trap-lado1').value);
  const l2 = parseFloat(document.getElementById('trap-lado2').value);

  const area = ((b1 + b2) * h) / 2;
  const perimetro = b1 + b2 + l1 + l2;

  document.getElementById('resultado-trapecio').innerText = `Área: ${area} | Perímetro: ${perimetro}`;
}

function calcularPentagono() {
  const a = parseFloat(document.getElementById('pent-lado').value);
  const ap = parseFloat(document.getElementById('pent-apotema').value);

  const area = (5 * a * ap) / 2;
  const perimetro = 5 * a;

  document.getElementById('resultado-pentagono').innerText = `Área: ${area} | Perímetro: ${perimetro}`;
}

function calcularRombo() {
  const D = parseFloat(document.getElementById('rombo-D').value);
  const d = parseFloat(document.getElementById('rombo-d').value);
  const lado = parseFloat(document.getElementById('rombo-lado').value);

  const area = (D * d) / 2;
  const perimetro = 4 * lado;

  document.getElementById('resultado-rombo').innerText = `Área: ${area} | Perímetro: ${perimetro}`;
}

function calcularCubo() {
  const l = parseFloat(document.getElementById('cubo-lado').value);

  const area = 6 * l * l;
  const volumen = l ** 3;
  const perimetroCara = 4 * l;

  document.getElementById('resultado-cubo').innerText = `Área superficial: ${area} | Volumen: ${volumen} | Perímetro de una cara: ${perimetroCara}`;
}

function calcularEsfera() {
  const r = parseFloat(document.getElementById('esfera-radio').value);

  const area = 4 * Math.PI * r ** 2;
  const volumen = (4 / 3) * Math.PI * r ** 3;

  document.getElementById('resultado-esfera').innerText = `Área superficial: ${area.toFixed(2)} | Volumen: ${volumen.toFixed(2)}`;
}

function calcularCilindro() {
  const r = parseFloat(document.getElementById('cilindro-radio').value);
  const h = parseFloat(document.getElementById('cilindro-altura').value);

  const area = 2 * Math.PI * r * (r + h);
  const volumen = Math.PI * r ** 2 * h;
  const perimetro = 2 * Math.PI * r;

  document.getElementById('resultado-cilindro').innerText = `Área superficial: ${area.toFixed(2)} | Volumen: ${volumen.toFixed(2)} | Perímetro de la base: ${perimetro.toFixed(2)}`;
}

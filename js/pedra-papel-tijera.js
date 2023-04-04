const $piedra = document.querySelector('.piedra');
const $papel = document.querySelector('.papel');
const $tijera = document.querySelector('.tijera');
const $botonBorrarHistorial = document.querySelector('.reiniciar');
const $victoriasKakashi = document.querySelector("#victoria-kakashi");
const $victoriasGai = document.querySelector("#victoria-gai");

let victoriasDeKakashi = [];
let victoriasDeGai = [];

function turnoIA() {
  const resultadoIA = Math.ceil(Math.random() * 3);
  if (resultadoIA === 1) {
    mostrarImagen('gai', 'piedra');
    return 'piedra'
  };
  if (resultadoIA === 2) {
    mostrarImagen('gai', 'papel')
    return 'papel';
  }
  if (resultadoIA === 3) {
    mostrarImagen('gai', 'tijera')
    return 'tijera'
  };
};

function borrarResultadoAnterior() {
  const $resultadoImagen = document.querySelectorAll('.piedra-papel-tijera');
  $resultadoImagen.forEach(resultado => resultado.remove());
};

function borrarHistorial() {
  victoriasDeKakashi = [];
  $victoriasKakashi.innerText = victoriasDeKakashi.length;
  victoriasDeGai = [];
  $victoriasGai.innerText = victoriasDeGai.length;
};

function compararPiedra(eleccionIA) {
  switch (eleccionIA) {
    case 'tijera':
      victoriasDeKakashi.push('Gandor');
      $victoriasKakashi.innerText = victoriasDeKakashi.length;
      break;
    case 'papel':
      victoriasDeGai.push('Ganador')
      $victoriasGai.innerText = victoriasDeGai.length;
      break;
  };
};

function compararPapel(eleccionIA) {
  switch (eleccionIA) {
    case 'piedra':
      victoriasDeKakashi.push('Gandor');
      $victoriasKakashi.innerText = victoriasDeKakashi.length;
      break;
    case 'tijera':
      victoriasDeGai.push('Ganador')
      $victoriasGai.innerText = victoriasDeGai.length;
      break;
  };
};

function compararTijera(eleccionIA) {
  switch (eleccionIA) {
    case 'papel':
      victoriasDeKakashi.push('Gandor');
      $victoriasKakashi.innerText = victoriasDeKakashi.length;
      break;
    case 'piedra':
      victoriasDeGai.push('Ganador')
      $victoriasGai.innerText = victoriasDeGai.length;
      break;
  };
};

function mostrarImagen(jugador, eleccion) {
  const $mostrarImagen = document.createElement('img');
  $mostrarImagen.src = `../img/${eleccion}.png`;
  $mostrarImagen.className = 'piedra-papel-tijera';
  document.querySelector(`#${jugador}`).appendChild($mostrarImagen);
};

$piedra.onclick = function () {
  borrarResultadoAnterior();
  setTimeout(() => {
    mostrarImagen('kakashi', 'piedra');
    compararPiedra(turnoIA());
  }, 100);
};

$papel.onclick = function () {
  borrarResultadoAnterior();
  setTimeout(() => {
    mostrarImagen('kakashi', 'papel');
    compararPapel(turnoIA());
  }, 100);
};

$tijera.onclick = function () {
  borrarResultadoAnterior();
  setTimeout(() => {
    mostrarImagen('kakashi', 'tijera')
    compararTijera(turnoIA());
  }, 100);
};

$botonBorrarHistorial.onclick = function () {
  borrarResultadoAnterior();
  borrarHistorial();
};
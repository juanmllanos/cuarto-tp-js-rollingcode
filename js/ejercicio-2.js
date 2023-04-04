const $saldo = document.getElementById('saldo');
const $informe = document.getElementById('informe');
const $botonIngreso = document.getElementById('boton-ingresar-dinero');
const $botonExtraer = document.getElementById('boton-extraer-dinero');
const $botonInformar = document.getElementById('boton-informar-dinero');
const $formularioIngreso = document.getElementById('form-ingreso');
const $formularioExtraccion = document.getElementById('form-extraccion');
const $ingreso = document.getElementById('ingreso');
const $extraccion = document.getElementById('extraccion');
const $confirmarIngreso = document.getElementById('confirmarIngreso');
const $confirmarExtraccion = document.getElementById('confirmarExtraccion');

function ocultar(elemento) {
	elemento.className = 'oculto'
};

function mostrar(elemento) {
	elemento.className = ''
};

const cuenta = {
	titular: 'Alex',
	saldo: 0,

	ingresar: function (ingreso) {
		this.saldo = this.saldo + ingreso;
	},
	extraer: function (extraccion) {
		this.saldo = this.saldo - extraccion;
	},
	informar: function () {
		$informe.className = '';
		$saldo.innerText = this.saldo;
	}
};

$botonIngreso.onclick = function () {
	mostrar($formularioIngreso);
	ocultar($formularioExtraccion);
	ocultar($informe);
};

$botonExtraer.onclick = function () {
	mostrar($formularioExtraccion);
	ocultar($formularioIngreso);
	ocultar($informe);
};

$botonInformar.onclick = function () {
	ocultar($formularioIngreso);
	ocultar($formularioExtraccion);
	cuenta.informar();
};

$confirmarIngreso.onclick = function (event) {
	if ($ingreso.value > 0) {
		cuenta.ingresar(Number($ingreso.value));
	} else {
		alert('No pueden ingresar menos de $0.')
	};
	ocultar($formularioIngreso);
	$ingreso.value = '';
	event.preventDefault();
};

$confirmarExtraccion.onclick = function (event) {
	if ($extraccion.value < 0) {
		alert('Ingrese un monto de extraccion mayor a 0.')
	} else if (cuenta.saldo >= $extraccion.value) {
		cuenta.extraer(Number($extraccion.value));
	} else {
		alert('No puede extraer mas dinero del que posee en su cuenta.')
	};
	ocultar($formularioExtraccion);
	$extraccion.value = '';
	event.preventDefault();
};
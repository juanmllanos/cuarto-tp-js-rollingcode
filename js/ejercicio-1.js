const $encender = document.getElementById('encender');
const $apagar = document.getElementById('apagar');

const auto = {
	color: 'blanco',
	marca: 'toyota',
	modelo: 2015,
	estaApagado: true,

	encender: function () {
		if (this.estaApagado) {
			this.estaApagado = false;
			console.log('Auto encendido.');
		} else {
			console.log('El auto ya esta encendido.');
		};
	},
	apagar: function () {
		if (!this.estaApagado) {
			this.estaApagado = true;
			console.log('Auto apagodo.');
		} else {
			console.log('El auto ya esta apagado.');
		}
	}
};

$encender.onclick = function () {
	auto.encender();
};

$apagar.onclick = function () {
	auto.apagar();
};
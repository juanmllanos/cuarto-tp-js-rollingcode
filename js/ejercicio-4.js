const $respuestas = document.querySelector('.respuesta-ej4');

const stock = [];

class Producto {
	#codigo; #nombre; #precio
	
	constructor(nombre, codigo, precio) {
		this.#codigo = codigo;
		this.#nombre = nombre;
		this.#precio = precio;
	};

	get nombre() {
		return this.#nombre;
	};
	get codigo() {
		return this.#codigo;
	};
	get precio() {
		return this.#precio;
	};

	imprimirDatos() {
		const $datos = document.createElement('p');
		$datos.innerText = `El producto "${this.#nombre}" tiene el codigo ${this.#codigo} y vale $${this.#precio}.`;
		$respuestas.appendChild($datos);
	};
};

const prod1 = new Producto('Limon', 213123, 45);
const prod2 = new Producto('Mermelada', 114867, 145);
const prod3 = new Producto('Balde', 95862, 800);

stock.push(prod1,prod2,prod3);

stock.forEach(producto => producto.imprimirDatos());
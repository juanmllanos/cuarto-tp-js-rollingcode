const $respuestas = document.querySelector('.respuestas-ej3');

class Rectangulo {
	#ancho; #alto
	constructor(ancho, alto) {
		this.#ancho = ancho;
		this.#alto = alto;
	};

	get ancho() {
		return this.#ancho;
	};
	get alto() {
		return this.#alto;
	};

	set ancho(ancho) {
		return this.#ancho = ancho;
	};
	set alto(alto) {
		if (alto !== this.#ancho) {
			return this.#alto = alto;
		} else alert('error pa')
	};

	perimetro() {
		const $perimetro = document.createElement('p');
		$perimetro.innerText = `El perimetro de tu rectangulo es de: ${this.#ancho * 2 + this.#alto * 2}cm`
		return $respuestas.appendChild($perimetro);
	};
	area() {
		const $area = document.createElement('p');
		$area.innerText = `El area de tu rectangulo es de: ${this.#ancho * this.#alto}cm cuadrados.`
		return $respuestas.appendChild($area);
	};
	informacion() {
		const $inforectangulo = document.createElement('p');
		$inforectangulo.innerText = `Rectangulo de: ${this.#ancho}cm de ancho y de ${this.#alto}cm de alto. (Cantidad de rectangulos ${rectangulos.length})`;
		return $respuestas.appendChild($inforectangulo);
	}
};

let lado1;
let lado2;
const rectangulos = [];

function pedirLados() {
	return lado1 = Number(prompt('Ingrese un numero en cm.')), lado2 = Number(prompt('Ingrese un numero en cm.'));
}

function crearRectangulo() {
	pedirLados();
	const nuevoRectangulo = new Rectangulo(lado1, lado2);
	rectangulos.push(nuevoRectangulo);
	nuevoRectangulo.informacion();
	console.log(rectangulos);
};

function calcularPerimetro() {
	rectangulos[rectangulos.length-1].perimetro();
};

function calcularArea() {
	rectangulos[rectangulos.length-1].area();
};

function modificarRectangulo() {
	const anchoNuevo = Number(prompt(`Cambiar ancho de ${rectangulos[rectangulos.length-1].ancho}cm por:`));
	rectangulos[rectangulos.length-1].ancho = anchoNuevo;
	const altoNuevo = Number(prompt(`Cambiar largo de ${rectangulos[rectangulos.length-1].alto}cm por:`));
	rectangulos[rectangulos.length-1].alto = altoNuevo;
	rectangulos[rectangulos.length-1].informacion();
};
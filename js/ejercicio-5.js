const $respuestas = document.querySelector('.respuestas-ej5');

class Persona {
	#nombre; #edad; #dni = 'desconocido'; #sexo; #peso; #altura; #anioNacimiento;

	constructor(nombre, edad, sexo, peso, altura, anioNacimiento) {
		this.#nombre = nombre;
		this.#edad = edad;
		this.#sexo = sexo;
		this.#peso = peso;
		this.#altura = altura;
		this.#anioNacimiento = anioNacimiento;
	};

	get nombre() {
		return this.#nombre;
	};
	get edad() {
		return this.#edad;
	}
	get dni() {
		return this.#dni;
	};
	get sexo() {
		return this.#sexo;
	};
	get peso() {
		return this.#peso;
	};
	get altura() {
		return this.#altura;
	};
	get anioNacimiento() {
		return this.#anioNacimiento;
	};

	generacion() {
		const $generacion = document.createElement('p');
		$generacion.innerText = `La generacion de ${this.nombre} es: "${calcularGeneracion(this.anioNacimiento)}".`;
		$respuestas.appendChild($generacion);
	};
	rasgo() {
		const $rasgo = document.createElement('p');
		$rasgo.innerText = `El rasgo de ${this.nombre} es: "${calcularRasgo(this.anioNacimiento)}".`;
		$respuestas.appendChild($rasgo);
	};
	esMayorDeEdad() {
		const $mayorDeEdad = document.createElement('p');
		$mayorDeEdad.innerText = `${this.nombre} ${2023 - this.anioNacimiento >= 18 ? 'es mayor de edad.' : 'es menor de edad.'}`;
		$respuestas.appendChild($mayorDeEdad);
	};
	mostrarDatos() {
		const $mostrarDatos = document.createElement('p');
		$mostrarDatos.innerText = `${this.nombre} DNI: ${this.dni} (${this.sexo}) nacio en el año ${this.anioNacimiento}, tiene ${this.edad} años pesa ${this.peso}kg y mide ${this.altura}cm.`;
		$respuestas.appendChild($mostrarDatos);
	};
	generarDni() {
		this.#dni = Math.floor(Math.random() * 99999999);
	}
};

const persona1 = new Persona('Pablo', 28, 35707402, 'masculino', 78, 180, 2978);

console.log(persona1);

function calcularGeneracion(anio) {
	if (anio >= 1994 && anio <= 2010) {
		return 'Generacion Z';
	} else if (anio >= 1981 && anio <= 1993) {
		return 'Generacion Y';
	} else if (anio >= 1969 && anio <= 1980) {
		return 'Generacion X';
	} else if (anio >= 1949 && anio <= 1968) {
		return 'Baby Boom';
	} else if (anio >= 1930 && anio <= 1948) {
		return 'Silent Generation';
	} else {
		return 'Desconocida'
	};
};

function calcularRasgo(anio) {
	if (anio >= 1994 && anio <= 2010) {
		return 'Irreverencia';
	} else if (anio >= 1981 && anio <= 1993) {
		return 'Frustracion';
	} else if (anio >= 1969 && anio <= 1980) {
		return 'Obsesion por el exito';
	} else if (anio >= 1949 && anio <= 1968) {
		return 'Ambicion';
	} else if (anio >= 1930 && anio <= 1948) {
		return 'Austeridad';
	} else {
		return 'Desconocido'
	};
};

persona1.generacion();
persona1.rasgo();
persona1.esMayorDeEdad();
persona1.mostrarDatos();
persona1.generarDni();
persona1.mostrarDatos();
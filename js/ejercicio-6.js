const $respuesta = document.querySelector('.resultados-ejer6');

const biblioteca = [];

function libroConMasPaginas() {
	const arrayPaginas = biblioteca.map(libro => [libro.nroPaginas]);
	const mayorPaginas = Math.max(...arrayPaginas);
	const libroConMasPaginas = biblioteca.filter(libro => libro.nroPaginas === mayorPaginas);
	const $libro = document.createElement('p');
	$libro.innerText = `El libro con mas paginas es: "${libroConMasPaginas.map(libro => libro.titulo)}"`
	$respuesta.appendChild($libro);
};

function agregarMostrarLibro(ISBN, titulo, autor, paginas) {
	const nuevoLibro = new Libro(`
	${ISBN} = ${prompt('Ingrese el ISBN')});
	${titulo} = ${prompt('Ingrese el titulo')});
	${autor} = ${prompt('Ingrese el autor')});
	${paginas} = ${prompt('Ingrese el numero de paginas')}`);
	biblioteca.push(nuevoLibro);
}

class Libro {
	#ISBN; #titulo; #autor; #paginas

	constructor (ISBN, titulo, autor, paginas) {
		this.#ISBN = ISBN;
		this.#titulo = titulo;
		this.#autor = autor;
		this.#paginas = paginas;
	}

	get ISBN() {
		return this.#ISBN;
	};
	get titulo() {
		return this.#titulo;
	};
	get autor() {
		return this.#autor;
	};
	get nroPaginas() {
		return this.#paginas;
	};

	mostrarLibro() {
		const $nuevoLibro = document.createElement('p');
		$nuevoLibro.innerText = `El libro "${this.titulo}" con ISBN ${this.ISBN} creado por el autor ${this.autor} tiene ${this.nroPaginas} paginas.`;
		$respuesta.appendChild($nuevoLibro);
	};
};

const libroUno = new Libro(9789506442279, 'Juego De Tronos Cancion De Hielo Y Fuego', 'Martin George R. R', 800);
biblioteca.push(libroUno);

const libroDos = new Libro(9789506442323, 'Choque De Reyes Cancion De Hielo Y Fuego', 'Martin George R. R', 928);
biblioteca.push(libroDos);

const libroTres = new Libro(8775431442323, 'Litado', 'Marcos Ruler', 228);
biblioteca.push(libroTres);

libroUno.mostrarLibro();
libroDos.mostrarLibro();
libroTres.mostrarLibro();
/* 
Crear un objeto persona que tenga las propiedades: nombre, apellido, edad, un valor verdadero o falso que indique si es estudiante y una lista de hobbies, este objeto debe contener los métodos para presentar a la persona, el cual mostrará todos los datos, y los métodos agregar, borrar y buscar un hobbie.
Agregar por lo menos 3 hobbies y mostrarlos por pantalla, luego buscar el hobbie ‘viajar’ e indicar si la persona lo tiene o no. Por ultimo eliminar el primer hobbie y volver a mostrar todos por pantalla. 
*/

const $resultados = document.querySelector('.resultados');
const $agregarHobbie = document.getElementById('agregarHobbie');
const $buscarHobbie = document.getElementById('buscarHobbie');
const $borrarHobbie = document.getElementById('borrarHobbie');

const mostrarHobbies = function (arregloHobbies) {
	return arregloHobbies.toString();
};

const persona = {
	nombre: 'Emilia',
	apellido: 'Llanos',
	edad: 7,
	esEstudiante: true,
	hobbies: [],

	presentarse: function () {
		const $presentacion = document.createElement('p');

		$presentacion.innerText = (`Hola me llamo ${this.nombre} ${this.apellido} tengo ${this.edad} años. ${this.hobbies.length ? `Me gusta ${mostrarHobbies(this.hobbies)}` : 'No tengo hobbies'} y ${this.esEstudiante ? 'soy estudiante' : 'no soy estudiante'}.`);
		$presentacion.className = 'respuesta';
		$resultados.appendChild($presentacion);
	},
	agregarHobbie: function (hobbie) {
		this.hobbies.push(hobbie);
		alert('Hobbie agregado con exito.');
	},
	buscarHobbie: function (hobbie) {
		if (persona.hobbies.indexOf(hobbie) >= 0) {
			const $buscadorHobbie = document.createElement('p');
			$buscadorHobbie.innerText = `${hobbie} es uno de los hobbies de ${persona.nombre}.`;
			$buscadorHobbie.className = 'respuesta';
			$resultados.appendChild($buscadorHobbie);
		} else {
			const $buscadorHobbie = document.createElement('p');
			$buscadorHobbie.innerText = `${hobbie} no es uno de los hobbies de ${persona.nombre}.`;
			$buscadorHobbie.className = 'respuesta';
			$resultados.appendChild($buscadorHobbie);
		}
	},
	borrarHobbie: function (hobbie) {
		const posicionHobbie = this.hobbies.indexOf(hobbie);
		if (posicionHobbie >= 0) {
			alert(`Hobbie: "${hobbie}" borrado con exito.`)
			return this.hobbies.splice(posicionHobbie,1);
		} else {
			alert(`El hobbie: "${hobbie}" no esta dentro de los hobbies de ${persona.nombre}.`)
		};
	}
};

document.getElementById('presentarse').onclick = function() {
	persona.presentarse();
};

document.getElementById('botonAgregar').onclick = function(event) {
	persona.agregarHobbie(`${$agregarHobbie.value}`);
	$agregarHobbie.value = '';
	event.preventDefault();
};

document.getElementById('borrar').onclick = function() {
	const $respuestas = document.querySelectorAll('.respuesta');
	$respuestas.forEach(respuesta => respuesta.remove());
};

document.getElementById('botonBuscar').onclick = function(event) {
	persona.buscarHobbie($buscarHobbie.value);
	$buscarHobbie.value = '';
	event.preventDefault();
};

document.getElementById('botonBorrar').onclick = function(event) {
	persona.borrarHobbie($borrarHobbie.value);
	$borrarHobbie.value = '';
	event.preventDefault();
};

persona.presentarse();
persona.agregarHobbie('escuchar cuentos');
persona.agregarHobbie('jugar');
persona.agregarHobbie('bailar');
persona.presentarse();
persona.buscarHobbie('viajar');
persona.hobbies.shift();
persona.presentarse();
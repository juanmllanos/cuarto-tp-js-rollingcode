let operacion = prompt(`ELegi una operacion basica:
1- Suma
2- Resta
3- Multiplicacion
4- Division`
);
let primerNumero;
let segundoNumero;

function pedirNumeros() {
	primerNumero = Number(prompt('Ingresa el primer numero:'));
	if (isNaN(primerNumero)) return alert('No ingresaste un numero');
	segundoNumero = Number(prompt('Ingresa el segundo numero:'));
	if (isNaN(segundoNumero)) return alert('No ingresaste un numero');
};

const calculadora = {
	resultado: '',

	sumar: function () {
		pedirNumeros();
		if (!isNaN(primerNumero) && !isNaN(segundoNumero)) {
			this.resultado = primerNumero + segundoNumero;
			document.write(
				`El resultado de ${primerNumero} + ${segundoNumero} es igual a ${this.resultado}.
			`);
		};
	},
	restar: function () {
		pedirNumeros();
		if (!isNaN(primerNumero) && !isNaN(segundoNumero)) {
			this.resultado = primerNumero - segundoNumero;
			document.write(
				`El resultado de ${primerNumero} - ${segundoNumero} es igual a ${this.resultado}.
		`);
		};
	},
	multiplicar: function () {
		pedirNumeros();
		if (!isNaN(primerNumero) && !isNaN(segundoNumero)) {
			this.resultado = primerNumero * segundoNumero;
			document.write(
				`El resultado de ${primerNumero} x ${segundoNumero} es igual a ${this.resultado}.
		`);
		};
	},
	dividir: function () {
		pedirNumeros();
		if (!isNaN(primerNumero) && !isNaN(segundoNumero)) {
			this.resultado = primerNumero / segundoNumero;
			document.write(
				`El resultado de ${primerNumero} / ${segundoNumero} es igual a ${this.resultado}.
		`);
		};
	},
};

if (operacion) {
	operacion = operacion.toLowerCase();
};

switch (operacion) {
	case '1':
	case 'suma':
		calculadora.sumar();
		break;
	case '2':
	case 'resta':
		calculadora.restar();
		break;
	case '3':
	case 'multiplicacion':
		calculadora.multiplicar();
		break;
	case '4':
	case 'division':
		calculadora.dividir();
		break;
	default:
		alert('No ingresaste una operacion valida.');
		break;
};
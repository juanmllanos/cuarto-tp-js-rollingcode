const $botonBuscar = document.getElementById('botonBuscar');

let listaProductos = [
	{
		nombreProducto: "Hidratante facial",
		precio: 3500,
		categoria: "Hidratante",
	},
	{
		nombreProducto: "Tonico exfoliante",
		precio: 2350.45,
		categoria: "Tonico"
	},
	{
		nombreProducto: "Protector solar factor 50",
		precio: 3300,
		categoria: "Protector solar",
	},
	{
		nombreProducto: "Protector solar toque seco factor 50",
		precio: 4100,
		categoria: "Protector solar",
	},
	{
		nombreProducto: "Protector solar con color factor 50",
		precio: 3850.5,
		categoria: "Protector solar",
	},
	{
		nombreProducto: "Gel de limpieza facial",
		precio: 1740.99,
		categoria: "Limpieza",
	},
	{
		nombreProducto: "Tonico hidratante",
		precio: 1250.99,
		categoria: "Tonico"
	},
	{
		nombreProducto: "Sérum hidratante",
		precio: 4250.99,
		categoria: "Sérum"
	},
	{
		nombreProducto: "Exfoliante de azúcar cherry",
		precio: 1200,
		categoria: "Labios",
	},
	{
		nombreProducto: "Pads de hidrogel para contorno de ojos",
		precio: 2800,
		categoria: "Ojos",
	},
	{
		nombreProducto: "Mascarilla facial",
		precio: 3250.99,
		categoria: "Mascaras",
	},
	{
		nombreProducto: "Sérum facial con PHA",
		precio: 3200,
		categoria: "Sérum"
	},
	{
		nombreProducto: "Bálsamo labial",
		precio: 3200,
		categoria: "Labios"
	},
	{
		nombreProducto: "Crema contorno de ojos",
		precio: 3200,
		categoria: "Ojos"
	},
	{
		nombreProducto: "Protector solar en barra",
		precio: 3800,
		categoria: "Protector solar",
	},
	{
		nombreProducto: "Mascara de hidratación y reparación",
		precio: 1200,
		categoria: "Mascaras",
	},
	{
		nombreProducto: "Agua micellar",
		precio: 2890,
		categoria: "Limpieza"
	},
];

function crearLista(lista) {
	document.write('<table><tbody>');
	document.write(`
	<tr>
	<th>Producto</th>
	<th>Categoria</th>
	<th>Precio</th>
	</tr>
	`);
	lista.forEach(producto => {
		document.write(`<tr>`);
		document.write(`<td>${producto.nombreProducto}</td>`);
		document.write(`<td>${producto.categoria}</td>`);
		document.write(`<td>${producto.precio}</td>`);
		document.write(`</tr>`);
	});
	document.write('</tbody></table><br>');
};

function filtrarProducto(productoFiltrado) {
	const listaFiltrada = listaProductos.filter(producto => producto.nombreProducto === productoFiltrado || producto.categoria === productoFiltrado || producto.precio === productoFiltrado);

	listaFiltrada.length 
		? crearLista(listaFiltrada)
		: document.write(`<p>El producto que buscas no esta en la lista.</p>`);
};

crearLista(listaProductos);
filtrarProducto('Sérum');
filtrarProducto('Protector solar');
filtrarProducto('Bruma');

$botonBuscar.onclick = function(event) {
	const producto = prompt(`Que producto quieres buscar?`)
	filtrarProducto(producto);
	event.preventDefault();
};
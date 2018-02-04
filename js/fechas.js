let fecha = new Date();

let navidad = new Date('12-25-2017');


let valor;

valor = fecha.getMonth();
valor = fecha.getDate();
valor = fecha.getDay();
valor = fecha.getFullYear();
valor = fecha.getMinutes();
valor = fecha.getHours();
/*Todos los milisegundos
registrados desde 1970*/
valor = fecha.getTime();
// para modificar el valor con set
valor = fecha.setFullYear(2017);
valor = fecha.getFullYear();


/* ForEach*/
const pendientes = ['Tarea',
'comer',
'Proyecto',
'Aprender JS'];

pendientes.forEach(function(dato, id){
	console.log(`${id} : ${dato}`);
});


/*== Map ===*/

const carrito = [
	{id: 1, producto: 'libro'},
	{id: 2, producto: 'Camisa'},
	{id: 3, producto: 'Guitarra'},
	{id: 4, producto: 'Disco'}
];


const nombreProducto = carrito.map(function (carrito){

return carrito.producto;
});


console.log(nombreProducto);

/*Imprimir con el for un objeto*/


const automovil = {
	modelo: 'Camaro',
	motor: 25.5,
	anio: 1982,
	marca: 'Chevy jons'
}

/*Recorrer un objeto con iteracion*/


for(let auto in automovil){

console.log(`${auto}: ${automovil[auto]}`);	

}


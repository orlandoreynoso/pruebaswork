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
console.log(valor);
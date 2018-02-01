const numeros = [10,20,30,40,50,60];

/*== eliminar al inicio ==*/
numeros.pop();
/*== eliminar al final ==*/
numeros.shift();
/*== eliminar desde posición ==*/
/*desde donde y cuantos.*/
numeros.splice(2,1);


/*revertir el orden*/
numeros.reverse();
/*añadir al inicio del arreglo.*/

numeros.unshift(2);
numeros.unshift(25);

/*== unir dos arreglos*/

//console.log(arreglo1.concat(arreglo2));

/*
Ordenar arreglos con letras
letras.sort();
*/

/*
ordenar con numeros:

*/
arreglo1 = [3,9,4,6,100,11,1,58,93,3];
arreglo1.sort(function(x,y){
	return x-y;
});

console.log(arreglo1);
//console.log(numeros.indexOf(50));

//console.log(numeros);
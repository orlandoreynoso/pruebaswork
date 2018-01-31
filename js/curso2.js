const numeros = [10,20,30,40,50,60];

console.log(Array.isArray(numeros));
;

console.log(numeros[2]);
;

numeros[6] = 350;

numeros.push(-350);

console.log(numeros);

let val1 = 20, 
   	nombre1  = "pepinillos",
   	val2 = 35,
   	nombre2 = "tomate";

let html; 

html = `
	<ul>
		<li>Nombre: ${nombre1} </li>
		<li>Precio: ${val1} </li>
		<li>Nombre two: ${nombre2} </li>
		<li>Precio two: ${val2} </li>
		<li>Total: ${calculo(val1,val2)} </li>
	</ul>
`;   	


function calculo(val1,val2){

	return val1 + val2;
}

document.getElementById('dale').innerHTML = html;
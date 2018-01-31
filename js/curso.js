let primerNombre  = "Rambo II";
let edadActual = 25;

console.log("Enviado a consola");
document.getElementById('dale').innerHTML = `<em>Bienvenido ${primerNombre} y tu edada es ${edadActual} </em>`;
//document.getElementById('dale').innerHTML = 'saludos 3';


let mensaje = "aprendiendo tecnologia con php y html";


/* buscar dentro de una cadena */
//console.log(mensaje.indexOf("php"));

//console.log(typeof mensaje);
/*  == comparar dos numeros direrentes ===*/
//console.log(2 != 3);
//console.log("-- valores sin valor--");
//console.log(null == undefined);

//console.log(null === undefined);

const num1 = 25;
const num2 = "30";

//console.log(Number(num2));
//console.log(parseInt(num2));

let dato;

dato = Number("20");
dato = Number("20.10932");
dato = Number(true);
dato = Number(false);
dato = Number(null);
dato = Number(undefined);
dato = Number("Hola Mundo");
dato = Number([1,2,3,4]);
dato = 1892121.1125456456456431;

/*solo funciona con numeros.*/
console.log(dato.toFixed(3));
/*
o tambien

console.log(parseInt(dato).toFixed(2));

*/
console.log(dato);

/*Convertir number a string*/

let vea;

vea = 90245;
vea = String(vea);

console.log(typeof vea.length);

vea = vea.toString();
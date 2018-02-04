/*== info referente a navegación ===*/

let donde;

donde = window.navigator;
donde = window.navigator.appName;
donde = window.navigator.appVersion;
donde = window.navigator.userAgent;
donde = window.navigator.language;

console.log(donde);


/*

ancho de toda la pantalla incluyendo consola.

alto = window.outerHeight;
ancho = window.outerWidth; 

*/



let alto,ancho,alto2,ancho2;

alto = window.innerHeight;
ancho = window.innerWidth; 

alto2 = window.outerHeight;
ancho2 = window.outerWidth; 

let ubicacion;

ubicacion = window.location.search;

let dato = window.location;

console.log(ubicacion);
console.log(dato);

/*
HISTORIAL DE NAVEGACIÓN:

-1,.-2, nos redirecciona hacia la página
que navegamos según el número como parámetro
que le pasamos.
window.history.go(-2);

*/


/*
Redireccionamiento:
window.location.href = 'http://www.google.com';

*/


//console.log(`alto: ${alto} ancho: ${ancho}`);

//console.log(`alto: ${alto2} ancho: ${ancho2}`);




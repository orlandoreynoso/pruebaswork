const persona = {

	nombre: 'miguel',
	apellido: 'can',
	presion: 'desarollador',
	email: 'info@web.com',
	edad: 35,
	musica: ['trance', 'Rock', 'grunge'],
	hogar: {
		ciudad: 'Madrid',
		pais: 'españa'
	},
	nacimiento: function(){
		return new Date().getFullYear() - this.edad;
	}

}


persona.musica.push('alternativo');
//console.log(persona.hogar.pais);
//console.log(persona.nacimiento());
//console.log(persona.apellido);
//console.log(persona.musica[2]);


/*Arrelgo de objetos*/

const autos = [
{modelo: 'Mustang', motor: 6.20},
{modelo: 'Ferrari', motor: 6.10},
{modelo: 'Maserati', motor: 6.0},
{modelo: 'Toyota', motor: 6.1},
];
/*
console.log(autos);

console.log(autos[1].modelo);
*/

/*Modificando los valores directamente*/
/* solo cuando es una constante, no aplica con let*/

autos[3].modelo = 'Audi';

/* Tambien se puede imprimr de forma string literal*/
for(let i = 0; i<autos.length; i++){
//	console.log(autos[i].modelo);
	console.log(`Modelo: ${autos[i].modelo} > motor: ${autos[i].motor}`);	
}


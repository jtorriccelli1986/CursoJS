# Funciones
Las funciones son fragmentos de codigo que vamos a poder usar las veces que necesitemos , las funciones se creean con la idea de factorizar codigo que vamos a reutilizar dentro de nuestro código.

## Tradicionales

Las funciones pueden ser de los siguientes tipos: 
con parametros, sin parametros, con retorno y sin retorno. Tener en cuenta que no debemos confundir la creación de la función con el uso de la función.

un ejemplo de como podemos definir una función es el siguiente:

`````````javascript
// a continuación  se declara la variable
function actualizacion(intento){
	intento++
}


// en esta linea estamos usando/llamando a la función

actualizacion(){
	
}
````````





## Flecha

Declaraciones de tipo feclhas son una nueva manera de declarar las funciones la cual a su vez tiene diferentes formas de poder ser declaradas, dependiendo en la mayoria de casos de los que quieras realizar.

Todas las variaciones comienzan con los argumentos de la función, seguidos por la flecha, seguidos por el contenido de la función. Tanto los argumentos como el contenido pueden tener diferentes formas dependiendo de su uso.

Veamos algunos ejemplos que nos ayuden a entender como funciona:


`````javascript
(parametro)=>{
	console.log(paremtro)
}
`````

en el ejemplo siguiente podemos ver una función de tipo felcha que retorna su mismo valor  y su equivalente en JS

``````javascript
var data = value => value;

// Que sería lo mismo que hacer esto:
var data = function (value) {
  return value;
};

``````


## El objeto This
## Argumentos

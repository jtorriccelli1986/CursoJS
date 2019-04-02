# Desestructuración de datos:
podemos definir la desustructuración como el proceso de aislar los elementos para poder tenernos disponibles de manera independientes en variables.

## Desestructuración de arreglos

``````javascript
cons persona=["Juan Carlos", 29,"Desarrollador"];
console.log(persona[0]) // nombre
...
console.log(persona[2]) // profesión 
``````

sim embargo existe una nueva manera de poder acceder o destructurar un arreglo para poder acceder de una manera más sencilla a los datos

``````javascript
//arreglo convencional
cons persona=["Juan Carlos", 29,"Desarrollador"];

// desestructurando un arreglo
const [nombre,edad,profesion]=persona

console.log(nombre);
console.log(edad);
console.log(profesion)

// tener en cuenta que si queremos acceder a los datos especificos y no a todos los datos podemos hacer lo siguiente:

const [nombre , , profesion]=persona;

// de esta manera solo capturamos el valor de nombre y profesión

``````

vamos ahora a aplicar la desestructuración usando una función:

``````````javascript

const persona=["Juan Carlos",20,"Desarrollador"]

// creamos una función que el parametro que reciba lo va a desestructurar para poder ser usado de manera independiente en el ambito de la función
	const mostrardatos=([nombre,edad,profesion])=>{
		console.log(nombre);
		console.log(edad)
		console.log(edad)
	}

	mostrardatos(persona);


// para este caso podemos también sumar la posibilidad de agregar valores por defecto a los parameteros teniendo finalmente lo siguiente:

	const mostrardatos=([nombre,edad,profesion,codigo="no especificado"])=>{
		console.log(nombre);
		console.log(edad)
		console.log(edad)
}

``````````

## Desestructuración de objetos

La desestructuración funciona de manera muy parecida a la de arreglos 

`````javascript
const usuario={
	nombre:"Juan Carlos",
	edad:29,
	pais:"Perú"
}
const {nombre,pais,profesion="no especificada"}=usuario;

// debemos tener en cuenta que a diferencia de un arreglo podemos acceder directamente al valor que queremos sin dejar espacios ya que se asocia de manera directa al nombre del atributo.
`````

Veamos como podemos usar la desestructuración en una función
`````javascript
const mostrarInfo=({nombre,profesion="Esudiante"}){
console.log("${nombre} es ${profesion}");
	
}
`````

Esta forma de trabajar es muy usada hoy por ello al revisar ejemplo vamos a encontar este forma de trabajar así que debemos estar preparados para poder entender como funciona.


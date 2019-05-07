
### Operador Spread

Spread, el nuevo operador de propagación que ofrece JavaScript ES6, nos resultará de ayuda para ahorrar líneas de código, ya que genera una lista de valores a partir de un array y es un excelente recurso para mejorar el código JavaScript

Al igual que el operador rest, del que hablamos hace poco en este artículo, utiliza la misma sintaxis de los tres puntos seguidos.


`````javascript
// pasamos los parametros 1 por 1
Math.min(3, 5, 7, 2, 9);


// usamos el operador spread

cons valores=[2,3,4,56,7]
Math.min(...valores);

// tener en cuenta que no es lo mismo usar el arreglo de manera directa en el metodo Min , esto generaría un error en la ejecución
cons valores=[2,3,4,56,7]
Math.min(valores);
`````

esto puede parecer confuso pero debemos de tener en cuenta que es como el conocido operador rest, pero lo invocamos en una función.


Vamos a ver como podemos combinar el uso de los operadores spred y rest

Vamos a poner como ejemplo una función que admite cualquier cantidad de cadenas por parámetro y devuelve un array con esas mismas cadenas, eliminando los espacios vacios de antes y después.

`````javascript
// declaramos la función usando el operador REST
function EliminarEspacios(...cadenas) {
   for (let i=0; i < cadenas.length; i++) {
     cadenas[i] = cadenas[i].trim();
   }
   return cadenas;
 }

 // ahora hacemos uso de la función

let limpiandoCadenas = EliminarEspacios('aquí ', ' lados ', ' espacio');
 console.log(limpiandoCadenas);


 // pero que pasa si en vez de una cadena queremos pasar un array 
 const cadenasOriginales = ['aquí ', ' lados ', ' espacio'];
 let limpiandoCadenas = EliminarEspacios(cadenasOriginales); // devuleve un error

// para poder solucionar este inconveniente podemos usar el operador spread

const cadenasOriginales = ['aquí ', ' lados ', ' espacio'];
 let limpiandoCadenas = EliminarEspacios(...cadenasOriginales); // el array se convertira en una lista de parametros que es lo que requiere la función.

`````

let limpiandoCadenas = EliminarEspacios('aquí ', ' lados ', ' espacio');
 console.log(limpiandoCadenas);


para entender los parametros 
Rest parameter funciona en la declaración de la funcion.
Spread operator funciona cuando se usa en la ejecución.
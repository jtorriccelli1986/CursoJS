# Arreglos
*En javascript un arreglo es una colección ordenada de elementos no homogéneos, cada elemento puede ser de un tipo de dato diferente. 

*En javascript los arreglos empiezan con el subíndice 0.

*En Javascript los arreglos son usados para almacenar multiples valores en una sola variable.

*Un arreglo es una variable que puede contener varios valores a la vez por lo que si tu tienes una lista de varios valores estos pueden ser almacenados en un sola variable de la siguiente manera:

`````javascript

let listado_numeros=[1,2,3];

let listado_numeros=new Array("uno", "dos", "tres");

`````
tener en cuenta que el constructor al momento de ser usado soporta 1 o multiples parametros , sin embargo en el caso que solo se le envíe un parametro este lo tomara como la cantidad de elementos que espera tener , esto nos puedes traer complicaciones cunado queremos crear un arreglo de un solo elemento ya que lo tomara como la cantidad de elementos y no como un arreglo de un solo elemento.

Una vez creado el arreglo vamos a necesitar acceder a los elementos del arrelgo , para ellos nosotros podemos acceder a los elementos de nuestro arreglo accediendo meidnate el número de indice .
Obs: tener en cuenta que los arreglos empiezan en el incide 0.

``````javascript
//en la siguiente linea de código estamos accediendo a el primer elmento de listado_numeros

console.log(listado_numeros[0])  // 1

``````

Los arreglos son un tipo especial de objetos , si usamos el operador typeOf en javascript nos va a deolver que es un objeto 

Algo muy importante que nos dan los arreglos , es la posibilidad de poder usar sus propiedades y metodos.

* Array asociativo :
Algunos lenguajes soportar arreglos con nombres en los indices , a esto se les conoce como array asociativos, sin embargo javascript no soporta este tipo de caracteristica.

``````javascript

var person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
var x = person.length;     // person.length will return 0
var y = person[0];         // person[0] will return undefined
``````


* como reconocer un arreglo 
en algunas ocaciones vamos a necesitar poder detectar si la respuesta que nos ha sido enviada es un arreglo para ello podemos recurrir a ciertos metodos que nos van a permitir saber si la respuesta es un arreglo.

``````javascript
var datos = ["uno", "dos", "tres"];

typeof datos;    // returns object

``````
el problema de usar el operador typeof es que considera el al arreglo como un objeto de tipo lista por lo que no vamos a poder reconocer de esta manera a un arreglo.

sin embargo podemos usar el siguiente metodo brindado por ECMAscript 5


``````javascript
Array.isArray(datos);   // returns true
``````
El prolemente con este metodo es que no es soportado por navegadores antiguos.

sin embargo podemos usar la siguiente basandonos en la creación de una propia funcion 

``````javascript
function isArray(x) {
  return x.constructor.toString().indexOf("Array") > -1;
}
``````

esta funcion retur a si el objeto prototype contiene la palabra array.

y por ultimop podemos usar el operador instanceof , lo que nos va a permitir obtener el constructor que se usa para crear la variable.

``````javascript
var datos = ["uno", "dos", "tres"];
fruits instanceof Array;   // returns true

``````


### Length 
La propiedad Length nos permite saber la cantidad de elementos que contiene un arreglo.


```javascript
let listado_numeros=[1,2,3];
console.log(listado_numeros.length) // 3
```

## Metodos

### Push

El metodo push nos permite agregar un elemento dentro del arrego 

```javascript
let listado_numeros=[1,2,3];
console.log(listado_numeros.length) // 3
listado_numeros.push(4);
console.log(listado_numeros.length) // 4
console.log(listado_numeros)  // [1,2,3,4]

// podemos agregar un elemento también usando la propiedad length
listado_numeros[listado_numeros.length]="otro"
```

### pop


### unshift
### shift
### map
### reduce
### filter
### find
### findIndex
### some,every

## conversiones (Array.fromS)

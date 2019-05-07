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

El metodo push nos permite agregar un elemento dentro del arrego y devuelve la longitud del arreglo

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

El metodo pop nos permite remove el último elemento de un arreglo y devuelve el elemento eliminado

```javascript
let listado_numeros=[1,2,3];
listado_numeros.pop() 
console.log(listado_numeros) // 1,2
```


### unshift
El método unshif agrega uno o más elementos al incio del arreglo y devulve la longitud del array.

```javascript
let listado_numeros=[1,2,3];
listado_numeros.unshift(-1,0); // 5
console.log(listado_numeros) // -1,0,1,2,3
```



### shift

El método shif remueve el primer elemento del arreglo y devulve el elemento eliminado.
```javascript
let listado_numeros=[1,2,3];
listado_numeros.shift(); 
console.log(listado_numeros) // 2,3
```



### map
El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

```javascript
var numeros = [1, 4, 9];
var dobles  = numeros.map(function(num) {
  return num * 2;
});

// dobles es ahora [2, 8, 18]
// numeros sigue siendo [1, 4, 9]
```

### reduce

El método reduce aplica una función a un acumulador y a cada valor de un array (de izquierda a derecha) para reducirlo a un único valor.
```javascript
let lisado=["a","b","c"];
	lisado.reduce(function(acumulador,valor_actual,index,arreglo){
		console.log(valor_anterior);
		return acumulador+valor_actual
},0)
```

### filter

El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

```javascript
	var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(function(data){
	let estado=false;
	if(data=="spray"){
		estado=true;
	}

	return estado; 
});
console.log(result);
```


### find

El metodo find de un arreglo devuelve el primer element del array que cumple con la purba porporcionada . en cualquier otro caso devuelve undefined
```javascript
var listado = [5, 12, 8, 130, 44];
var found = listado.find(function(element) {
  return element > 10;
});
```
no solo podemos evaluar valores dentro de un arreglo si no que también podemos evaluar estructuras más complejas con un arreglo de objetos

```javascript
var inventario = [
    {nombre: 'manzanas', cantidad: 2},
    {nombre: 'bananas', cantidad: 0},
    {nombre: 'cerezas', cantidad: 5}
];

function esCereza(fruta) { 
    return fruta.nombre === 'cerezas';
}

console.log(inventario.find(esCereza));
// { nombre: 'cerezas', cantidad: 5 }
```


### findIndex
El metdo findIndex funciona de manera muy parecida al metod find(), solo que en vez de devolver el elemento devuelve el indice del elemento encontrado que cumpla la condición , en caso de no encontrar ninguna coincidencia devuelve -1


#forEach
El método forEach() ejecuta la función indicada una vez por cada elemento del array.
```javascript
var lista = ['a', 'b', 'c'];

lista.forEach(function(element) {
  console.log(element);
});

// salida: "1"
// salida: "2"
// salida: "3"

```

### Join
El método join() une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena.
```javascript 
var elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"
```

### split
El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.


```javascript 
var nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
var masculinos = nombres.slice(1, 3);

// masculinos contiene ['Pedro','Miguel']
```


### sort
El método sort() ordena los elementos de un array localmente y devuelve el array. La ordenación no es necesariamente estable. El modo de ordenación por defecto responde a la posición del valor del string de acuerdo a su valor Unicode.

```javascript 

var frutas = ['guindas', 'manzanas', 'bananas'];
frutas.sort(); // ['bananas', 'guindas', 'manzanas']

var puntos = [1, 10, 2, 21]; 
puntos.sort(); // [1, 10, 2, 21]
// Tenga en cuenta que 10 viene antes que 2
// porque '10' viene antes que '2' según la posición del valor Unicode.

var cosas = ['word', 'Word', '1 Word', '2 Words'];
cosas.sort(); // ['1 Word', '2 Words', 'Word', 'word']
// En Unicode, los números vienen antes que las letras mayúsculas
// y estas vienen antes que las letras minúsculas.
```
#includes

El método includes() determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda. Utiliza el algoritmo sameValueZero para determinar si se encuentra el elemento dado.

```javascript 
var array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

var pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false
```


### some 
El método some() comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.
```javascript 
var array = [1, 2, 3, 4, 5];

var even = function(element) {
  // checks whether an element is even
  return element % 2 === 0;
};

console.log(array.some(even));
// expected output: true
// y estas vienen antes que las letras minúsculas.
```
un ejemplo en donde queremos validar si existe un valor mayor a 10
```javascript 
function isBiggerThan10(element, index, array) {
  return element > 10;
}
[2, 5, 8, 1, 4].some(isBiggerThan10);  // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true
```

ahora si queremos hacer lo mismo con funciones de tipo flecha podemos hacer esto:
```javascript 
[2, 5, 8, 1, 4].some(elem => elem > 10);  // false
[12, 5, 8, 1, 4].some(elem => elem > 10); // true
```


### Every
El método every() devuelve un booleano, true si todos los elementos en el arreglo pasan la condición implementada por la función dada y false si alguno no la cumple.

El siguiente ejemplo prueba si todos los elementos de un arreglo son mayores que 10.

```javascript 
function esSuficientementeGrande(elemento, indice, arrreglo) {
  return elemento >= 10;
}
[12, 5, 8, 130, 44].every(esSuficientementeGrande);   // false
[12, 54, 18, 130, 44].every(esSuficientementeGrande); // true
```

## Array.from

El método Array.from() crea una nueva instancia de Array a partir de un objeto iterable.

```javascript 
console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]
```

Array.from permite convertir los 2 siguientes tipos de valores en arrays:
valores array-like (tienen logintud y elementos indexados)
valores iterables

```javascript 
const arrayLike = { length: 2, 0: 'x', 1: 'y' };

// no podemos usar for-of, por que no es un iterable
for (const item of arrayLike) { 
    console.log(item);
}// TypeError

const array = Array.from(arrayLike);
//ahora sí podemos, array es iterable
for (const item of array) {
    console.log(item);
}
// a
// b
```

De la segunda opción, objetos iterables, vemos que podemos crear Arrays a partir de Maps, Sets, strings, iterables obtenidos a partir de array.keys(), etc.

Veamos algunos ejemplos de Array.from con iterables:

```javascript 
Array.from(['a', 'b', 'c']);
//['a', 'b', 'c']

Array.from(['a', 'b', 'c'].keys());
//[0, 1, 2]

Array.from("foo");                      
// ["f", "o", "o"]

var set = new Set(["foo", "bar", 1]);
Array.from(set);   
// ["foo", "bar", 1]

var map = new Map([['bar', 1], ['foo', 2]]);
Array.from(map);
//[["bar", 1], ["foo", 2]]  
```

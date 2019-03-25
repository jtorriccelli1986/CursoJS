Declaración de variables


# Variables
La variables en Js son contenedores para almacenar información que vamos a utilizar posteriormente.

JavaScript es un lenguaje de programación con el ámbito global como ámbito, visibilidad o scope predeterminado,Esto significa que una variable declarada fuera de una función es una variable global, por ejemplo:


`````````
var texto = "global";

function actualizar() {
    texto = "local";
    console.log(texto); // local
}

actualizar();

console.log(texto); // local


`````````

En código anterior , podemos apreciar como la variable texto es una variable de ámbito global definida inicialmente fuera de la función es modificada dentro de la función;

Sin Embargo si declaramos la variable Texto con var tanto al inicio como dentro de la función , se va a generar una variable local cuyo ambito se reduce a la propia función donde ha sido declarada;


`````````
var texto = "global";

function actualizar() {
    var texto = "local";
    console.log(texto); // local
}

actualizar();

console.log(texto); // global


`````````











### Hoisting
El concepto de Hoisting fue pensado como una manera general de referirse a cómo funcionan los contextos de ejecución en JavaScript (específicamente las fases de creación y ejecución). En otras palarbas el Hositing hace que todas las declaracion de variables pase por un "levantamiento" hasta el inicio del ambito de aplicación , pero la asignación de valor permanece en el sitio donde se realice. 

Por ejemplo:

`````````
console.log(dato)  // devuelve como valor undefined
var dato="hola"

`````````
El resultado del código anterior nos permite enender que la variable daos ha sido declarada pero al momento de acceder a ella no tenia ningún valor.

Teniendo en cuenta el concepto de Hositing lo que estaría sucediendo es lo siguiente:

`````````
var dato  // Hoisting en acción
console.log(dato)  // devuelve como valor undefined
var dato="hola"

`````````

Tener encuenta que la caracteristica del hositing es solo aplicable para las declaracio de variables con var

Esto también sucede con las funciones por ejemplo:


`````````
nombreDelGato("Dumas");

function nombreDelGato(nombre) { 
  console.log("El nombre de mi gato es " + nombre);
}

`````````

Como se puede observar, aunque primero llamamos a la función en el código, antes de que sea escrita, el código aún funciona. Esto sucede por la manera en la que el contexto de ejecución trabaja en JavaScript. 


Por último un ejemplo de como el hoisting afecta solo la declaración de la variables más no la inicialización. el valor será asginado cuando la setencia sea aclanzada.


`````````
var x = 1; // Inicializa x
console.log(x + " " + y); // '1 undefined'
var y = 2; Inicializa y

`````````




#Alcances

#Var vs Let vs Cons

se cuenta con 3 caracteristicas

con Var
// con var podemos redeclarar variables, lo cual nos puede generar problemas sin darnos cuenta.

por ejemplo:
var nombre="Carlos";
var nombre="Arturo";

Esto puede generar errores involuntarios;



con Let:

let pais="Mexico"
let pais="Hola Mexico";

Declaración de variables


# Variables
La variables en Js son contenedores para almacenar información que vamos a utilizar posteriormente.

JavaScript es un lenguaje de programación con el ámbito global como ámbito, visibilidad o scope predeterminado,Esto significa que una variable declarada fuera de una función es una variable global y es pasada por referencia a scopes descendientes o herederos, Por ejemplo:

`````````
texto = "global";

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

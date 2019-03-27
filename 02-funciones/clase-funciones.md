# Funciones
Las funciones son fragmentos de codigo que vamos a poder usar las veces que necesitemos , las funciones se creean con la idea de factorizar codigo que vamos a reutilizar dentro de nuestro código.

## Tradicionales

Las funciones pueden ser de los siguientes tipos: 
con parametros, sin parametros, con retorno y sin retorno. Tener en cuenta que no debemos confundir la creación de la función con el uso de la función.

un ejemplo de como podemos definir una función es el siguiente:

`````````javascript
 //a continuación  se declara la variable
function actualizacion(intento){
	intento++
}

 //en esta linea estamos usando/llamando a la función

actualizacion()
`````````





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
Del ejemplo mostrado anteriormente definimos lo siguiente con respecto a la función de tipo flecha:

* cuando la función recibe un solo parametro no necesita parentisis
* en una sola linea no es necesario declarar el return ya que la función flecha retorarnara el primer argumento que encuentre.

Para el caso que la función reciba más de un argumento entonces si debemos hacer uso de los parentisis :

``````javascript
var sum = (n1, n2) => n1 + n2;

// Que sería lo mismo que hacer esto:
var sum = function (n1, n2) {
  return n1 + n2;
};
``````

En el caso que la función no reciba ningún parametro se usan los paréntisis solos

``````javascript
var getName = () => "Luis Miguel";

// Que sería lo mismo que hacer esto:
var getName = function () {
  return "Luis Miguel";
};
``````

Pero debemos tener en cuenta y muy claro que no es la unica forma que tenemos para declarar una función de tipo flecha y podemos decir que recurrimos de una otra manera a una sintaxis más tradicional.
Esto sucede para el caso que nuestra función realiza más tareas debemos encapsular nuestro contenido entre llaves y usar explicitamente el return en nuestra función
``````
var sum = (n1, n2) => {
  return n1 + n2;
};

// Que sería lo mismo que hacer esto:
var sum = function (n1, n2) {
  return n1 + n2;
};
``````
 en este caso vemos claramente que trabajamos como si lo hicieramos de manera tradicional , pero lo que debemos de tener en cuenta es que el valor arguments no se encontara disponible.


 para el caso que queramos que nuestra función returno un objeto , 



## El objeto This
## Argumentos

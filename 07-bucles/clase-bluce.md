# Bucles

Los bucles podemos considerarlos como un bloque de código que se ejecuta varias veces hasta que la condición asignada al bloque deje de cumplirse.
las estructuras de tipo bucle son:

* For  
* White
* Do while
* For in
* For of

a continuación explicaremos como funciona cada una :

## For

El bucle FOR se utiliza para repetir una o más instrucciones un determinado número de veces. De entre todos los bucles, el FOR se suele utilizar cuando sabemos seguro el número de veces que queremos que se ejecute.


````````javascript
for(let i=0;i<10;i++){
	//tarea a repetir
}
````````

El bucle FOR tiene tres partes incluidas entre los paréntesis, que nos sirven para definir cómo deseamos que se realicen las repeticiones. La primera parte es la inicialización, que se ejecuta solamente al comenzar la primera iteración del bucle. En esta parte se suele colocar la variable que utilizaremos para llevar la cuenta de las veces que se ejecuta el bucle.


** La segunda parte es la condición, que se evaluará cada vez que comience una iteración del bucle. Contiene una expresión para decidir cuándo se ha de detener el bucle, o mejor dicho, la condición que se debe cumplir para que continúe la ejecución del bucle.

** Por último tenemos la actualización, que sirve para indicar los cambios que queramos ejecutar en las variables cada vez que termina la iteración del bucle, antes de comprobar si se debe seguir ejecutando.

** Después del for se colocan las sentencias que queremos que se ejecuten en cada iteración, acotadas entre llaves.

Ejemplo 
// Separa por categorias los elementos del siguiente arreglo (crear una arreglo nuevo para cada categoria)

````````javascript
listado[{item:"Producto01",categoria:1},
        {item:"Producto02",categoria:2},
        {item:"Producto03",categoria:3},
        {item:"Producto04",categoria:3},
        {item:"Producto05",categoria:2},
        {item:"Producto06",categoria:1},
        {item:"Producto07",categoria:1},
        {item:"Producto08",categoria:2},
        {item:"Producto09",categoria:2},
        {item:"Producto10",categoria:3},
        {item:"Producto11",categoria:3},
        {item:"Producto12",categoria:1},
        {item:"Producto13",categoria:2}]
````````

## While

Mientras que el bucle  for  se utiliza cuando sabes cuántas veces quieres repetir un bloque de código, el bucle  while te permite seguir ejecutando un bloque de código mientras la condición a evaluar sea verdadera. Por lo tanto, aunque se puede utilizar con un contador (como un for), se suele utilizar cuando no sabes cuántas veces tienes que repetir el bucle.

** La traducción de while en español es mientras. Por lo tanto, la sentencia  while  se puede entender como "mientras se cumpla la condición, ejecuta el siguiente bloque de código entre llaves.

````````javascript
let numero=0;
while(numero<=10){
  console.log(numero)
	//tarea
  numero++;
}
````````

La condición se evalúa antes de cada vuelta del bucle. Si la condición es verdadera, se ejecuta el bloque código del while. Llegado al final del bloque, la ejecución vuelve al  while  y se vuelve a evaluar la condición.


En muchos casos, tanto el  while  como el  for  pueden ser utilizados indistintamente, por lo que quizás te estés preguntando cuál deberías usar en cada caso.

Las situaciones en las que el número de repeticiones no se conozca de antemano serán más simples de escribir con un bucle  while . En la mayoría de los casos, se usa para controlar datos que son introducidos por el usuario, como en el siguiente ejemplo.

````````javascript
var letra = "";
while (letra !== "x") {
    letra = prompt("Introduzca la letra x para salir:");
    console.log(letra);
}
````````

**En conclusión, todos los bucles pueden escribirse con un while. Si sabemos cuántas repeticiones requerirá el bucle, será mejor utilizar el  for . En cambio, si no conocemos el número de vueltas requeridas, utiliza el  while .‌

// ejercicio utilizar un bucle para poder contabilizar 3 intenteos de logeo


## Do while

El bucle do...while es una variación del bucle while visto anteriormente. Se utiliza generalmente cuando no sabemos cuantas veces se habrá de ejecutar el bucle, igual que el bucle WHILE, con la diferencia de que sabemos seguro que el bucle por lo menos se ejecutará una vez.
la forma de definiir una estructura do while es la siguiente :

````````javascript
do {
  i += 1;
  console.log(i);
} while (i < 5);
````````

El bucle se ejecuta siempre una vez y al final se evalúa la condición para decir si se ejecuta otra vez el bucle o se termina su ejecución.

Veamos el ejemplo que escribimos para un bucle WHILE en este otro tipo de bucle.



````````javascript
let salir
do { 
   	valor = prompt("Escibre salir para terminar","") 
} while (valor != "salir")
````````
Este ejemplo funciona exactamente igual que el anterior, excepto que no tuvimos que inicializar la variable color antes de introducirnos en el bucle. Pide un color mientras que el color introducido es distinto que "rojo".


## For in

Su papel principal es el de recorrer un objeto pasando por cada una de sus propiedades para actuar sobre ellas de alguna manera;
Declaramos una variable la cual recogerá a cada iteración el valor de los atributos que componen el objeto a recorrer.


````````javascript
// forma 1:
for ( let variable in objeto )
 
// forma 2:
for ( variable  in  objeto  )

````````

un ejemplo sencillo de como se podemos usar esta estructura es el siguiente:

````````javascript
var myObj = {
  foo : 1,
  bar : 2,
  anotherProperty : 3
}
 
for( var property in myObj ){
  console.log( property ); // foo ,bar ,anotherProperty
}
// tener en cuenat que esta iteracción nos devolvera el nombre de la propiedad y no el valor

// en caso quisieramos acceder al valor podemos modificar la estructura de la siguiente manera

for( var property in myObj ){
  console.log( MyObj[property] ); // 1 ,2 ,3
}

con respecto a el performance podemos validar lo siguiente:
https://jsperf.com/for-vs-for-in-performance-with-strings


````````

Ejemplo 
// Separa los elementos que tengan la propiedad estado definida  y tambien agrupar los elementos por estados definidos

````````javascript
listado[{item:"Producto01",categoria:1,estado:1},
        {item:"Producto02",categoria:2},
        {item:"Producto03",categoria:3,estado:1},
        {item:"Producto04",categoria:3},
        {item:"Producto05",categoria:2,estado:1},
        {item:"Producto06",categoria:1},
        {item:"Producto07",categoria:1,estado:0},
        {item:"Producto08",categoria:2},
        {item:"Producto09",categoria:2,estado:1},
        {item:"Producto10",categoria:3},
        {item:"Producto11",categoria:3,estado:1},
        {item:"Producto12",categoria:1,estado:0},
        {item:"Producto13",categoria:2}]
````````


## For of

A diferencia del for if el for of nos permite iterar sobre "colecciones iterables" de esta manera podemos ejecutar las sentencias de cada iteración con el valor del elemento que corresponda.

vamos a ver algunos ejemplos:

```````javascript
let iterable = [10, 20, 30];

for (let value of iterable) {
  value += 1;
  console.log(value);
}
```````

```````javascript
let iterable = "boo";

for (let value of iterable) {
  console.log(value);
}
```````

Debemos tener en cuenta que pudimos haber realizado esta misma tarea usando la estructura For , pero con esta estructura nuestro código es un poco más optimo ya que como vemos no definimos una variables de incialización ni de incremental.


Ejemplo: plasmar en una lista html el siguiente contenido del arreglo y contemplar un estilo visual diferente para los elementos con estado : 0

listado[{item:"Producto01",categoria:1,estado:0},
        {item:"Producto02",categoria:2,estado:1},
        {item:"Producto03",categoria:3,estado:1},
        {item:"Producto04",categoria:3,estado:1},
        {item:"Producto05",categoria:2,estado:1},
        {item:"Producto06",categoria:1,estado:0},
        {item:"Producto07",categoria:1,estado:1},
        {item:"Producto08",categoria:2,estado:1},
        {item:"Producto09",categoria:2,estado:0},
        {item:"Producto10",categoria:3,estado:1},
        {item:"Producto11",categoria:3,estado:1},
        {item:"Producto12",categoria:1,estado:1},
        {item:"Producto13",categoria:2,estado:0}]


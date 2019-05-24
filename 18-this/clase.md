## Palabra reserva This
 

En JavaScript la identidad de this depende del objeto propietario de la función desde donde estamos accediendo a this, pero si no accedemos desde una función o esta no pertenece a un objeto, entonces estamos en contexto global y this hace referencia, en caso de un navegador web, al objeto window.


## CONTEXTO GLOBAL
Hemos visto que accediendo a this desde el contexto global, el propietario de this va ser el objeto window, este es un ejemplo sencillo de acceder a this desde contexto global:


```javascript 
alert(this.outerWidth);

```
Definimos un objeto con notación literal y para obtener el valor de una propiedad que se calcula con otras dos del mismo objeto, estamos usando this, pero como no estamos consultando this dentro de una función que pertenezca a un objeto, this hace referencia a window que no tiene una propiedad prop1 y prop2, con lo que el resultado que se muestra en el mensaje sera 'undefined undefined'.

```javascript 
var obj = {
prop1: "xurxo",
prop2: "developer",
fullprop: this.prop1 + " " + this.prop2
}
alert(obj.fullprop);
```

Para poder acceder a this y que haga referencia a nuestro objeto la propiedad fullprop debe ser una función.

## CONTEXTO DE FUNCIÓN

Para conseguir que this haga referencia al objeto dentro del cual consultamos this, hemos visto que tenemos que hacer que nuestra propiedad desde donde accedemos a this sea una función.

```javascript
var obj = {
prop1: "xurxo",
prop2: "developer",
fullprop: function(){
 return this.prop1 + " " + this.prop2;   
}
}
alert(obj.fullprop());

```


Pero no importa donde se defina la función, sino que pertenezca al objeto. En el ejemplo anterior podríamos definirnos la función fuera de la definición del objeto con notación literal y añadirsela después, cómo la función pertenede al objeto obj, this hace referencia a obj. 

```javascript

var obj = {
prop1: "xurxo",
prop2: "developer"
}
 
function GetFull(){
 return this.prop1 + " " + this.prop2;   
}
 
obj.fullprop = GetFull;
 
alert(obj.fullprop());

```


Sin embargo si invocamos a la función directamente sin hacerlo a través del objeto, volvemos a estar en contexto global porque la función no pertenece a un objeto y nos devolverá de nuevo 'undefined undefined' porque this hace referencia al objeto window y este no tiene esas propiedades.


```javascript
var obj = {
prop1: "xurxo",
prop2: "developer"
}
 
function GetFull(){
 return this.prop1 + " " + this.prop2   
}
 
obj.fullprop = GetFull;
 
alert(GetFull());

```

## Jerarquia de objetos

Si tenemos un objeto padre y dentro de un hijo tenemos una función, dentro de esta función this va a apuntar al hijo. Siempre apunta al objeto más inmediato.


```javascript
var obj = {
name: "padre",
child: {
 name: "hijo",
 ShowName: function(){
  alert(this.name);
 }
}
}
 
obj.child.ShowName();

```
### Función dentro de una función
En caso de que tengamos una función dentro de una función

´´´javascript
var obj = {
prop1: "xurxo",
prop2: "developer",
fullprop: function(){
 var nestedFunc = function(){
 return this.prop1 + " " + this.prop2;   
 }  
 
 return nestedFunc();
  }
}
alert(obj.fullprop());
´´´

this dentro de la función más interna esta en contexto global porque no esta contenida dentro de un objeto y apunta a window, en este caso volvemos a obtener undefined undefined. Para solucionarlo en la función más externa podemos almacenar una copia de this para que se utilice dentro de la función más interna. 

```javascript
var obj = {
prop1: "xurxo",
prop2: "developer",
fullprop: function(){
 self = this;
 
        var nestedFunc = function(){
            return self.prop1 + " " + self.prop2;   
 }  
 
 return nestedFunc();
  }
}
alert(obj.fullprop());
```
## CALL Y APPLY

Existe la posibilidad de modificar la identidad de this en tiempo de ejecución mediante las funciones Call y Apply. Son funciones que se pueden utilizar para invocar una función, son similares y lo que cambia es como se invocan . El primer parámetro, en ambas funciones, es el objeto a usar como this , si usamos call los parámetros posteriores se pasan como argumentos y si usamos apply los parámetros de la función se pasan contenidos dentro de un array.


```javascript
function Order(price){
 this.price = price;
}
 
var order1 = new Order(400);
var order2 = new Order(1000);
  
function CalculateTotal(percntageTax,shippingCost){
  this.totalPrice = this.price + (this.price * (percntageTax/100)) + shippingCost;
}
 
CalculateTotal.call(order1, 15,5 );
CalculateTotal.apply(order2, [15,0]);
 
alert(order1.totalPrice);
alert(order2.totalPrice);
```

## BIND
El objetivo de bind sirve también para  indicar en tiempo de ejecución el objeto this a una función.

Mediante Bind se crea una nueva función basada en una original, la nueva función queda enlazada de forma que toma el cuerpo de la original y se le debe pasar por parámetro objeto a usar como this más los parámetros que requiere la función original.

```javascript

function Order(price){
 this.price = price;
}
 
var order1 = new Order(400);
  
function CalculateTotal(percentageTax,shippingCost){
  this.totalPrice = this.price + (this.price * (percntageTax/100)) + shippingCost;
}
 
var bindedCalculateTotal = CalculateTotal.bind(order1,15,0);
 
bindedCalculateTotal();
 
alert(order1.totalPrice);

``
La principal diferencia entre call/apply y bind es que las dos primeras ejecutan en el momento una función, la segunda no ejecuta la función sino que devuelve una nueva basada en la original.

La palabra clave this tiene en Javascript un comportamiento diferente al de otros lenguajes pero por lo general, su valor hace referencia al propietario de la función que la está invocando o en su defecto, al objeto donde dicha función es un método. pero debe estar referenciada a un objeto, en caso no tenga un objeto de referencai sera hara referencia al objeto window;


por ejemplo:

``````javascript
function llamado(){
	console.log(this.name)
}

var persona1={
	nombre="juan carlos",
	ver_nombre=llamado
}

var persona2={
	nombre="Diego",
	ver_nombre=llamado	
}


persona1.ver_nombre();
``````


Como vemos el valor de this cambia según sobre que objeto lo llamemos. Bien, Javascript sabe que valor tiene que poner a this antes de llamar a una función, pero nosotros necesitamos entenderlo para no encontrarnos con bugs imposibles de corregir. Para ésto hay una regla de oro: el objeto this pasado a una función es el objeto que está antes del punto que precede los paréntesis que invocan a la función. Es decir, la llamada objectA.myMethod() la podríamos dividir en cuatro partes:
* objectA: El objeto que contiene la función
* **. (punto)**: Separa el objeto de su propiedad (la función)
* myMethod: Nombre de la función
* () (paréntesis): Ejecutan la función En éste caso vemos que

antes del punto está objectA por lo que será objectA lo que se le pasará a la variable this del método myMethod.

Pero que pasa si no hay ningún punto? si la función no está en ningún objeto?

``````javascript
function testScope() {
  console.log(this);
}
testScope();
``````

Aquí podríamos pensar que this es null y tendría sentido pero no, Javascript define que una función invocada sin contexto, el contexto debe ser el Objeto Global, que en el caso de un navegador sería window. Por lo que en una función que no esté contenida en ningún objeto recibirá el objeto global como this.

Pero que pasa cuando hacemos el llamado a una función que no esta asociada a un objeto , veamos el siguiente escenario

``````javascript

var alice = {
  nombre: "Alice",
  cansarse: function() {
    console.log(this.nombre);
  }
};

var myFunction = alice.cansarse;

myFunction();


``````

Si llamamos a myFunction directamente lo estaríamos llamando sin contexto por lo el la variable this tendría el objeto global dentro de myFunction, como podemos hacer que ejecute myFunction pero pasándole alice como this? Para ésto tenemos las funciones .call() y .apply(), empecemos por la función .call().

### call
La función .call() recibe los mismos argumentos que la función mas uno, el valor que tendrá this que se pasa antes que los demás argumentos. Es decir, nuestra función myFunction no recibe ningún argumento así que si llamamos a su método .call() y le pasamos lo que queremos que sea this es decir, alice conseguiremos que el método funcione igual que si lo hubiésemos llamado con alice.cansarse


``````javascript
// como la función no recibe parametros solo se pasa el un parametro que en este caso sera el objeto que queremos que sea el contexto dentro de la función

myFunction.call(alice);

// en el caso que la función tenga parametros tendriamos lo siguiente

myFunction.call(alice,parametro1,parametro2);


``````


### apply

El método .apply() actúa de forma bastante similar a .call(), pero con una variación, solo recibe dos argumentos, el primero es el contexto de la función, el valor de this y el segundo será un array que contendrá los argumentos que se le pasarán a la función, veamos su uso en el ejemplo anterior:
``````javascript
myFunction.apply(alice, [ "Bob", "Rob" ]);


function callWithAlice() {
  alice.saludar.apply(alice, arguments);
}
callWithAlice("Rob", "Bob");

``````

Esto aunque en un principio parezca bastante inútil nos servirá cuando, queriendo o no cambiar el contexto de una función, querramos llamarla y no sepamos ni nos interese saber cuántos argumentos tiene, supongamos que tenemos la función callWithAlice() que llama a la función .saludar() de alice y le pasa todos los argumentos que recibe.

observación:Para ésto hace falta aclarar que el objeto arguments es una especie de array con los argumentos pasados a la función, más adelante profundizaremos en ello.


### bind

El método .bind() recibe un argumento, el contexto que se le podrá a la función sobre la que se aplica el .bind() y devolverá una función que cuando sea llamada ejecutará la función original con el contexto que se le pasó a .bind(). Lo veremos mejor con un ejemplo:

``````javascript
var alice = {
  nombre: "Alice",
  saludar: function() {
    console.log("Hola! Soy " + this.nombre);
  }
};

var myFunction = alice.saludar.bind(alice);
myFunction();

``````



http://xurxodeveloper.blogspot.com/2014/06/la-palabra-clave-this-en-javascript.html



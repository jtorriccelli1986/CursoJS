# Generadores
Son funciones que podemos pausar o detener y que podemos acceder mas tarde y vamos a acceder al mismo contexto en que la habiamos dejado anteriormente

un ejemplo de como podemos definir un generador y poder usarlo es el siguiente 

```javascript 
function* mostrar(){
		yield 1;
		yield 1+1;
		yield 1+5;
	}

let listado=mostrar();
console.log(listado.next());
console.log(listado.next());
console.log(listado.next());
console.log(listado.next());

```

los generadores pueden trabajar con parametros

```javascript
function* verdatos(valor1){
	yield valor1;
	yield valor1+2;
	yield valor1+5;
	yield valor1+6; 
}

let datos=verdatos(50);
console.log(datos.next());
console.log(datos.next());
console.log(datos.next());
console.log(datos.next());

```

Por otro lado que sucede si nosotros usamos un generador dentro de otro generador, la sintaxis quedaría de la siguiente manera:

```javascript
function* recorrido(){
	yield 1;
	yield 2;
	yield* subrecorrido();
	yield 4;

}

function* subrecorrido(){
	yield "Hola entre al sub-recorrido";
	yield "Estoy dentro de subrecorrido";
	yield "Estoy saliendo del subrecorrido"
}
```


otro ejemplo de como podemos usar los generadores de manera programatica es el siguiente:

````javascript
function* tarea(){
	let indice=0;
	while(indice<3){
	yield indice++;
	}
}

// ahora probemos llamando a la función

let tarea=tarea()
console.log(tarea.next());
````
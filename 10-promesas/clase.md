# Promesas
Las promesas son un patrón de diseño que nos permiten controlar la ejecución de un determinado cómputo del cual no sabemos cómo ni cuándo se nos va a devolver un determinado valor. Una promesa es un objeto que envuelve este comportamiento para que por medio de una máquina de estados podamos controlar cuándo un valor está disponible o no.

Las promesas son muy socorridas en ejecuciones de código asíncrono pues, si no tenemos claro cuando nuestro cómputo va a devolver un valor, podemos dejar una promesa en espera que se encargue de gestionar esta devolución.

Las promesas no solo nos son útiles en marcos asíncronos. Es cierto que la mayoría de veces es usado en en este contexto, pero como veremos en apartados siguientes, puede ser un buen patrón para encadenar ejecuciones sobre un valor determinado.


´´´javascript
let promesa=new Promise((resolove,reject)=>{
	const estado=true;
	if(estado){
		resolve()
	}else{
		reject()
	}
	
})
promesa.then(()=>{
	//
})
promesa.catch(()=>{
	//
})
´´´

Tener en cuenta que las promesas solo pueden  manejar un estado, veamos un ejemplo de mencionado:

´´´javascript
let promesa=new Promise((res,error)=>{
	setTimeout(()=>{
	res("hola");
	},2000);
	setTimeout(()=>{
	error("hola");
	},3000);

})
´´´
Si nos percamos en este punto luego de 2s la promesa resolvera resolve y luego de los 3s ya no podrá cambiar de estado.



### Promise.all
es una propiedad de las promesas que nos permite evaluar el estado de todas las promesa , esto nos devuelve un arreglo con el estado de todas las promesa , en caso 1 de las promesas sea rechazada nos devuelve el error de la promesa que fue rechazada


´´´javascript
let promesa1=new Promise((resolve,reject)=>{
	resolve("Primera Promesa");

})
 let promesa2=new Promise((resolve,reject)=>{
	resolve("Segunda Promesa");
	
})

Promise.all([Promesa1,Promesa2])
.then((value)=>{
	console.log(value);
})
.catch((error)=>{
	console.log(error)
})
 

´´´

### Promise.race
nos permite obtener el valor de una promesa con la premisa de que la será devuelva es la primea que se termino de ejecutar.

´´´javascript
let promesa1=new Promise((resolve,reject)=>{
setTimeout(()=>{
	resolve("Primera Promesa");
	},1000)

})
 let promesa2=new Promise((resolve,reject)=>{
setTimeout(()=>{
	resolve("Segunda Promesa");
	},2000)
	
})

 let promesa3=new Promise((resolve,reject)=>{
	setTimeout(()=>{
	resolve("3era Promesa");
	},1500)
	
})


Promise.race([promesa1,promesa2,promesa3])
.then((value)=>{
	console.log(value);
})
.catch((error)=>{
	console.log(error)
})
 

´´´

### concadenación de promesas


´´´javascript
let promesa1=new Promise((res,error)=>{
	res("promesa 1 resulta")
})
let promesa2=new Promise((res,erro)=>{
	res("promesa 2 resuleta")
})

promesa1.then((data)=>{
	console.log(data)
	return(promesa2)
})
.then((promesaenviada)=>{
	console.log(promesaenviada);
})
.catch((error)=>{
	console.log("error en"+error);
})
´´´

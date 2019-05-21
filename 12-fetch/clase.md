#Fetch
La API Fetch proporciona un canal para obtener recursos a través de la red. Basándose en un sistema de Peticiones (Request) y Respuestas (Response) permite a un documento o aplicación mantener un diálogo con el servidor de forma segura.

##Flujo básico
La transacción se realiza siguiendo el proceso ya conocido para quienes trabajan con XMLHttpRequest:

*El método fetch() realiza una petición del recurso que necesita sobre el servidor que lo aloja.
*El propio objeto devuelve una promesa con el objeto Response de la petición, tanto si tiene éxito como si no.
*Una vez obtenida la respuesta, ésta proporciona una serie de métodos que permiten comprobar su contenido y manejarlo.

Visto el funcionamiento a grandes rasgos, pasemos a su sintaxis:

````javascript
let url=""
fetch(url)
    .then( data => data.json() )
    .then( data => console.info( data ) )
    .catch( e => console.error( 'ocurrio un error' ) );
````
Como el tratamiento de la respuesta es algo confuso, veamos qué ha pasado paso a paso:


En este ejemplo básico, tenemos por un lado la petición (fetch) y el tratamiento de la respuesta mediante promesas (secuenciales). El ‘catch‘ del final permite manejar excepciones, como lo sería un error del servidor.

Se ha realizado una petición a la URL indicada. Por defecto, es de tipo GET. Este proceso genera una promesa a la espera de que el servidor conteste con sus correspondientes cabeceras.
Una vez resuelta la primera promesa, se abre un canal que recibe la respuesta completa y la transforma en un JSON. Este proceso de streaming, se gestiona en una segunda promesa.
Una vez tenemos los datos listos, la segunda promesa queda resuelta y podemos trabajar con los datos. En este caso, pintándolos en la consola.
El ‘catch’ final pertenece a la excepción de la primera promesa y nos previene de posibles errores durante el proceso de conversión.

La clave aquí está en el doble procesado (las dos promesas): por un lado, la primera queda a la espera de que el servidor envíe las cabeceras según la petición, mientras que la segunda, mantiene un canal abierto hasta obtener la respuesta completa para su conversión. Finalmente, una vez resueltas ambas, podremos trabajar con los datos en el formato escogido.

## Peticiones
El constructor Request representa nuestra petición al servidor. Dependiendo de la naturaleza de ésta, podemos necesitar parámetros opcionales. Los más habituales son:

method: el método HTTP de la petición. Por ejemplo: GET (por defecto), POST, DELETE.
headers: cualquier cabecera HTTP que queramos incluir en la petición.
body: el contenido que queramos añadir a nuestra petición. Las peticiones de tipo GET no pueden tener body.
mode: el modo a utilizar por la petición. Por ejemplo: cors, no-cors, o same-origin.
cache: el modo de caché que queremos utilizar para la petición. Por ejemplo: no-store, reload, no-cache.
NOTA: La lista completa de parámetros puede verse en la documentación.

Con estos parámetros, una instancia completa de Request se formaría del siguiente modo (continuamos usando el endpoint del ejemplo anterior):

````javascript
var url = 'http://date.jsontest.com',
    params = {
        method: 'GET', 
        mode: 'cors', 
        redirect: 'follow',
        headers: new Headers( {
            'Content-Type': 'application/json'
        } )
    };     
 
var request = new Request( url, params );
 
fetch( request ).then( r => r.json() )
    .then( data => console.dir( data ) )
    .catch( e => console.error( 'Something went wrong' ) );

````


## Cabeceras
Un aspecto importante de las peticiones son las cabeceras que enviamos al servidor para que éste las recoja y responda en consecuencia. Para ello, contamos con el constructor Headers y sus distintos métodos. A continuación podemos ver algunos ejemplos

````javascript
// Creamos una nueva instancia vacía
var headers = new Headers();
 
// Añadimos algunas cabeceras
headers.append( 'Content-Type', 'text/plain' );
headers.append( 'X-My-Custom-Header', 'CustomValue' );
 
// Comprobamos, asignamos y tomamos valores
headers.has( 'Content-Type' ); // true
headers.get( 'Content-Type' ); // "text/plain"
headers.set( 'Content-Type', 'application/json' );
 
// Borramos una cabecera
headers.delete( 'X-My-Custom-Header' );
 
// Añadimos valores en el constructor
var headers = new Headers( {
    'Content-Type': 'text/plain',
    'X-My-Custom-Header': 'CustomValue'
} );
````


#Respuesta

La petición genera promesa que se transforma en una respuesta, en concreto, una instancia de Response.

Response proporciona varios métodos para trabajar con las respuestas. Los más interesantes son:

*json(): crea una promesa que espera la respuesta completa del servidor para devolver finalmente un objeto JSON.
*text(): crea una promesa que espera la respuesta completa del servidor para devolver finalmente una cadena de texto.

````javascript
var url = 'https://code.jquery.com/jquery-3.1.1.slim.min.js';
 
fetch( url )
    .then( response => response.text() )
    .then( data => console.log( data ) );

````



# Post
dentro de las peticiones que vamos a realizar es posible que queramos también solicitar el registro de información lo que implica enviar la información necesaría.
Para esto Fetch nos brinda un conjunto de caracteristicas que nos va a permitir manejar este escenario de una manera muy sencilla.

para eso debemos de conocer el objto FormData

## FormData

Los objetos FormData le permiten compilar un conjunto de pares clave/valor para enviar mediante XMLHttpRequest. Están destinados principalmente para el envío de los datos del formulario, pero se pueden utilizar de forma independiente con el fin de transmitir los datos tecleados.

### Creación de un objeto FormData desde ceroSección
Usted mismo puede construir un objeto FormData instanciándolo y después añadiendo campos a la instancia usando su método  append() , tal y como se muestra:
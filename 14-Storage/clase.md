# Webstorage

La API de almacenamiento web proporciona los mecanismos mediante los cuales el navegador puede almacenar información de tipo clave/valor, de una forma mucho más intuitiva que utilizando cookies.

Los dos mecanismos en el almacenamiento web son los siguientes:

* **sessionStorage** mantiene un área de almacenamiento separada para cada origen que está disponible mientras dure la sesión de la página (mientras el navegador esté abierto, incluyendo recargas de página y restablecimientos).


```javascript 

sessionStorage.nombre = "Juan Carlos"

```
* **localStorage** hace lo mismo, pero persiste incluso cuando el navegador se cierre y se reabra.

```javascript
localStorage.nombre = "Juan Carlos"
```


en un ejemplo más completo vamos a ver como podemos almacenar datos con localStorage

```javascript

const registros = [
		{codigo: "15012", nombre: "Miraflores"},
		{codigo: "15013", nombre: "Pueblo Libre"},
		{codigo: "15014", nombre: "San Isidro"},
		{codigo: "15015", nombre: "Comas"}
	]

// asignamos datos
const datos = JSON.stringify(registros)
		localStorage.ubigeo = datos

//obtenemos datos
const datos = JSON.parse(localStorage.ubigeo)

```

Algunos metodos con los cuales podemos acceder a los datos son:


**storage.getItem()**  Devuelve el valor del dato guardado en la clave cuyo nombre se le pasa como parámetro, pero si esta clave no existe nos devuelve null.

**storage.setItem()** Este método se utiliza para almacenar datos en una clave especifica , cuando recibe una clave y un valor, añade estos al almacén de datos, o actualiza(sobre-escribe) el valor si la clave ya existe.

Además podemos encontrar otros métodos que se usan con menor frecuencia que los mencionados anteriormente, como por ejemplo: 

**storage.removeItem()**: Cuando se le pasa el nombre de una clave por parámetro eliminará dicha clave del almacenamiento.

**storage.clear()**: Cuando este método es invocado vacía todas las claves del almacenamiento.


## cookie

Las cookies, de nombre más exacto HTTP cookies, es una tecnología que en su día inventó el navegador Netscape (descanse en paz), actualmente definida en el estándar RFC 6265, y que consiste básicamente en información enviada o recibida en las cabeceras HTTP y que queda almacenada localmente client-side durante un tiempo determinado. En otras palabras, es información que queda almacenada en el dispositivo del usuario y que se envía hacia y desde el servidor web en las cabeceras HTTP.



Una cookie es un string (cadena de texto) que contiene parejas parametro=valor separadas por ; de la siguiente forma:


### Crear cookies
Establecer una cookie en JavaScript es tan fácil como crear el string que define la cookie y asignarlo a document.cookie. Por ejemplo:
```javascript
document.cookie = "nombrecookie=valorcookie; max-age=3600; path=/";
```

Si queremos crear varias cookies, tenemos que hacer este paso una vez para cada una. Por ejemplo, con el siguiente código se crearían las cookies comida_favorita y color_favorito:

```javascript
document.cookie = "comida_favorita=arroz; max-age=3600; path=/";
document.cookie = "color_favorito=amarillo";
```



para más detale de cookie revisar el siguiente link : https://cybmeta.com/que-son-las-cookies-y-como-funcionan y https://cybmeta.com/cookies-en-javascript
# AJAX
AJAX es el acrónimo de Asynchronous Javascript and XML, es decir: Javascript y XML Asincrono. 


El objeto XMLHttpRequest posee muchas otras propiedades y métodos diferentes a las manejadas por la primera aplicación de AJAX. A continuación se incluye la lista completa de todas las propiedades y métodos del objeto y todos los valores numéricos de sus propiedades.

Las propiedades definidas para el objeto XMLHttpRequest son:

* **readyState**	Valor numérico (entero) que almacena el estado de la petición
* **responseText**	El contenido de la respuesta del servidor en forma de cadena de texto
* **responseXML**	El contenido de la respuesta del servidor en formato XML. El objeto devuelto se puede procesar como un objeto DOM
* **status**	El código de estado HTTP devuelto por el servidor (200 para una respuesta correcta, 404 para "No encontrado", 500 para un error de servidor, etc.)
* **statusText**	El código de estado HTTP devuelto por el servidor en forma de cadena de texto: "OK", "Not Found", "Internal Server Error", etc.


Los valores definidos para la propiedad readyState son los siguientes:

* **0**	No inicializado (objeto creado, pero no se ha invocado el método open)
* **1**	Cargando (objeto creado, pero no se ha invocado el método send)
* **2**	Cargado (se ha invocado el método send, pero el servidor aún no ha respondido)
* **3**	Interactivo (se han recibido algunos datos, aunque no se puede emplear la propiedad responseText)
* **4**	Completo (se han recibido todos los datos de la respuesta del servidor)

Los métodos disponibles para el objeto XMLHttpRequest son los siguientes:


* **abort()**	Detiene la petición actual

* **getAllResponseHeaders()**	Devuelve una cadena de texto con todas las cabeceras de la respuesta del servidor

* **getResponseHeader("cabecera")**	Devuelve una cadena de texto con el contenido de la cabecera solicitada

* **onreadystatechange**	Responsable de manejar los eventos que se producen. Se invoca cada vez que se produce un cambio en el estado de la petición HTTP. Normalmente es una referencia a una función JavaScript

* **open("metodo", "url")**	Establece los parámetros de la petición que se realiza al servidor. Los parámetros necesarios son el método HTTP empleado y la URL destino (puede indicarse de forma absoluta o relativa)

* **send(contenido)**	Realiza la petición HTTP al servidor

* **setRequestHeader("cabecera", "valor")**	Permite establecer cabeceras personalizadas en la petición HTTP. Se debe invocar el método **open()** antes que **setRequestHeader()**


El método **open()** requiere dos parámetros (método HTTP y URL) y acepta de forma opcional otros tres parámetros. Definición formal del método open():

Por defecto, las peticiones realizadas son asíncronas. Si se indica un valor false al tercer parámetro, la petición se realiza de forma síncrona, esto es, se detiene la ejecución de la aplicación hasta que se recibe de forma completa la respuesta del servidor.

Los últimos dos parámetros opcionales permiten indicar un nombre de usuario y una contraseña válidos para acceder al recurso solicitado.

Por otra parte, el método send() requiere de un parámetro que indica la información que se va a enviar al servidor junto con la petición HTTP. Si no se envían datos, se debe indicar un valor igual a null.

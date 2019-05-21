## FormData

Los objetos FormData le permiten compilar un conjunto de pares clave/valor para enviar mediante XMLHttpRequest. Están destinados principalmente para el envío de los datos del formulario, pero se pueden utilizar de forma independiente con el fin de transmitir los datos tecleados.

### Creación de un objeto FormData desde ceroSección
Usted mismo puede construir un objeto FormData instanciándolo y después añadiendo campos a la instancia usando su método  append() , tal y como se muestra:

```javascript

var formData = new FormData();

formData.append("nombre", "Groucho");
formData.append("id", 123456); // el numero es convertido en texto "123456"
```

### Datos desde un formulario HTML

Para construir un objeto FormData que contenga los datos de un **form** existente, especifique ese elemento form cuando cree el objeto FormData:

```javascript
var formElement = document.getElementById("myFormElement");
var request = new XMLHttpRequest();
request.open("POST", "submitform.php");
request.send(new FormData(formElement));
```

También puede añadir datos adicionales al objeto FormData antes de enviarlo. Así:

```javascript
var formElement = document.getElementById("myFormElement");
formData = new FormData(formElement);
formData.append("serialnumber", serialNumber++);
request.send(formData);
```

Esto le permite aumentar los datos del formulario antes de enviarlos para incluir información adicional que no necesariamente debiera ser editable por el usuario en el formulario.

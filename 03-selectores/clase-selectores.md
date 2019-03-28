# Selectores

El uso de “selectores” en JavaScript permite encontrar y seleccionar elementos del DOM bien sea para extraer información de cada nodo o para manipularlos de ser necesario.

para poder realizar ese tipo de tarea tenemos un conjunto de posiblidad y debemos entender cada una de ellas para poder saber como actuar en cada situación

los selectores que tenemos disponbiles son los siguientes:
* Etiqueta o Tag 
* Clase
* ID
* QuerySelector
* QuerySelectorAll


### Selector de tipo etiqueta
Este selector nos devuelve un arreglo de elementos compuestos por todos los elementos que cumplan la condición

``````javascript
// esto nos va a devolver a los elementos dentro del DOM de etiqueta "p"
document.getElementBytag("p")

``````


### Selector de tipo clase
Este selector nos devuelve un arreglo de elementos compuestos por todos los elementos que cumplan la condición

``````javascript
// esto nos va a devolver a los elementos dentro del DOM que contentan la clase "contendio"
document.getElementsByClassName("contenido")

``````


### Selector de tipo id
Este selector nos devuelve un único elemento que cumplan la condición

``````javascript
// esto nos devolver a los elementos dentro del DOM de etiqueta p
document.getElementBytag("p")

``````




* E#myid  un elemento E con ID igual a myid.
* E[foo]  un elemento E con un atributo foo
* E[foo="bar"]  un elemento E cuyo valor de atributo foo es exactamente igual a bar
* E[foo="bar" i] un elemento E cuyo valor de atributo foo es exactamente igual a cualquier permutación de caso (rango ASCII) de bar
* E[foo~="bar"] un elemento E cuyo valor de atributo foo es una lista de valores separados por espacios en blanco, uno de los cuales es exactamente igual a bar
* E[foo^="bar"] un elemento E cuyo valor de atributo foo comienza exactamente con el string bar
* E[foo$="bar"] un elemento E cuyo valor de atributo foo finaliza exactamente el string bar
* E[foo*="bar"] un elemento E cuyo valor de atributo foo contiene el substring bar


#selector de etiqueta ,clase e ID
#selectores generales
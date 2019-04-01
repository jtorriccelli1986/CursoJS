# Template string

Las plantillas de cadena de texto (template strings) son literales de texto que habilitan el uso de expresiones incrustadas. Es posible utilizar cadenas de texto de más de una línea, y funcionalidades de interpolación de cadenas de texto con ellas.


Forma convencional 
``````javascript
const nombre="Juan carlos";
const edad=30;
console.log("nombre es: " +nombre + " y la edad es: "+edad);

``````

con template string 
``````javascript
const nombre="Juan carlos";
const edad=30;
console.log(`nombre es ${nombre} y la edad es ${edad}`);

``````


## Multilínea
Gracias a las plantillas, ahora es posible disfrutar de cadenas multilínea en Javascript sin necesidad de recurrir a concatenaciones, barras invertidas, unión de arrays u otros malabares habituales:

``````javascript
var myTemplateString = `La donna e mobile
cual piuma al vento`;
 
console.info( myTemplateString );
// La donna e mobile
// cual piuma al vento
``````

Es importante recalcar que las plantillas mantienen el formato introducido, incluyéndose los saltos de línea y las tabulaciones:

``````javascript
var myTemplateString = `La donna e mobile
    cual piuma al vento`;
 
console.info( myTemplateString );
// La donna e mobile
//     cual piuma al vento
``````

## Interpolación de cadenas
La interpolación permite sustituir marcadores de posición (placeholders) en tiempo de ejecución por sus correspondientes valores a través de expresiones. Cualquier expresión válida en el lenguaje lo es en la plantilla:


``````javascript
const nombre="juan carlos"
console.log("valor de variables es ${nombre}")

//Arrays
var arr = [ 'la', 'donna', 'e', 'mobile' ];
console.info( `My chain joined: ${ arr.join( ' ' ) }` );


// Objects
var collection = [
    {
        id: 1,
        title: 'The Neverending Story'
    }, {
        id: 2,
        title: 'Momo'
    }
];
 
var myID = 2;
 
console.info( `Book title: ${ collection.find( item => item.id === myID ).title }` );

// Methods
var str = 'la donna e mobile';
 
console.info( `Uppercase: ${ str.toUpperCase() }` );
// Uppercase: LA DONNA E MOBILE


``````


## Plantillas
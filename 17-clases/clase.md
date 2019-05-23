# Clases
Las clases de javascript, introducidas en ECMAScript 2015, son una mejora sintáctica sobre la herencia basada en prototipos de JavaScript

 Las clases de JavaScript proveen una sintaxis mucho más clara y simple para crear objetos y lidiar con la herencia.

Tal como las funciones las clases van a tener la 2 posibilidad al ser declaradas:

* Expresiones de clases y
* Declaraciones de clases.


Una manera de definir una clase es mediante una declaración de clase. Para la declaración de una clase, es necesario el uso de la palabra reservada class y un nombre para la clase ("Usuario" en esté caso).


```javascript 
class Poligono {
 	let alto;
 	let ancho;
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
}
```


Izado (Hoisting)
Una importante diferencia entre las declaraciones de funciones y las declaraciones de clases es que las declaraciones de funciones son izadas y las declaraciones de clases no lo son. En primer lugar necesitas declarar tu clase y luego acceder a ella, de otra modo el ejemplo de código siguiente arrojará un ReferenceError:

```javascript
const p = new Poligono(); // ReferenceError

class Poligono {}
```

Una expresión de clase es otra manera de definir una clase. Las expresiones de clase pueden ser nombradas o anónimas. 

```javascript
// Anonima
var Poligono = class {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
};

// Nombrada
var Poligono = class Poligono {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
};
```


### Cuerpo de la clase y definición de métodos
El cuerpo de una clase es la parte que se encuentra entre las llaves {}. Este es el lugar donde se definen los miembros de clase, como los métodos o constructores.

### Constructor

El constructor es un método especial que inicializa una instancia de la clase. En JavaScript sólo puede haber un constructor (no existe el concepto de sobrecarga), por lo que aparecerá un error de sintaxis si intentamos crear otros.


El método constructor es un método especial para crear e inicializar un objeto creado con una clase. Solo puede haber un método especial con el nombre "constructor" en una clase. Si esta contiene mas de una ocurrencia del método constructor, se arrojará un Error SyntaxError



### Definiendo metodos en una clases

```javascript
class Poligono {
  constructor (height, width) {
    this.height = height;
    this.width = width;
  }

  // Método
  calcArea () {
    return this.height * this.width ;
  }
}

const cuadrado = new Poligono (10, 10);
```
console.log(cuadrado.calcArea()); // 100 



### Metodos staticos

La palabra clave static define un método estático para una clase. Los métodos estáticos son llamados sin instanciar su clase y no pueden ser llamados mediante una instancia de clase. Los métodos estáticos son a menudo usados para crear funciones de utilidad para una aplicación.



Un método estático es aquel que se puede invocar sin tener que crear una instancia de una clase. Se crean anteponiendo la palabra static a la definición del método. Usualmente se ocupan para realizar rutinas de ayuda en la clase.

```javascript

class Punto {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    
    static distancia(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        
        return Math.sqrt(dx * dx + dy * dy);
    }
}
 
const p1 = new Punto(5, 5);
const p2 = new Punto(10, 10);
console.log(Punto.distancia(p1, p2)); //7.07106
 
 ``



### Accediendo a propiedades

´´´javascript

class Persona {  
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    
    get nombreCompleto() {
        return `${this.nombre} ${this.apellido}`;
    }
    set nomberCompleto(valor){
    	this.nombre=valor;
    }
}
 
var p = new Persona("John", "Doe");
console.log(per.nombreCompleto); // accediendo a la propiedad 

```


La clase persona define variables de instancia nombre y apellido inicializadas en el constructor. Además de una propiedad llamada nombreCompleto que devuelve la concatenación del nombre y el apellido (¡usando interpolación de cadenas!), noten la palabra reservada get. Se accede a la propiedad como si fuera una variable cualquiera sin embargo detrás de la escena es un método que puede realizar validaciones y otras cosas útiles.





 http://www.etnassoft.com/2016/12/02/introduccion-a-la-poo-en-javascript-moderno-las-nuevas-clases-en-es6/


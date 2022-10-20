//Tipos de datos en JavasCript
/*
La sintaxis en lo que es comentarios es muy
similar a la de Java realmente diriamos que es identica
*/
var nombre = 'Ariel'; //Tipo Str
console.log(typeof nombre);

nombre = 7;
console.log(typeof nombre);

nombre = 12.3;
console.log(typeof nombre);
//Tipo Numérico
var numero = 3000; 
console.log(numero);
//Tipo Objeto
var objeto = {
    nombre : "Ariel",
    apellido : "Betancud",
    telefono : "2614568788"
}

console.log(objeto);

//Tipo de dato boolean
var bandera = true;
console.log(typeof bandera);

//Funciones tipo de dato; nos permite reutilizar lineas de codigo
function miFuncion(){}
console.log(typeof miFuncion);

//Tipo de dato symbol
var simbolo = Symbol("Mi simbolo");
console.log(simbolo)

//Tipo de dato clase, es una función en Javascript
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre; //es para hacer referencia a los atributos de nuestra clase
        this.apellido = apellido;
        this.edad = edad;
    }
}

console.log(typeof Persona);

//Tipo de dato undefined, cualquier tipo de variable que no haya sido inicializada
var x;
console.log(typeof x);
x = undefined;
console.log(typeof x);
//null : significa ausencia de valor
var y = null; //null no es un tipo de dato, pero su origen es de tipo object
console.log(typeof y);


//Tipo de dato array y Empty String
var autos = ['Citroen', 'Audi', 'BMW', 'Ford'];
console.log(autos);
console.log(typeof autos)// Preguntamos que tipo de dato es: object

var z = "";
console.log(z);//Esto se refiere a una cadena vacía
console.log(typeof z);
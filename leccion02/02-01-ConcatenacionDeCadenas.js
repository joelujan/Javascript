var nombre = 'Jose ';
var apellido = 'Montes';
var nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);
var nombreCompleto2 = 'Ariel' + ' ' + 'Betancud';
console.log(nombreCompleto2);
var juntos = nombre + 219;// Lee de izq a der siguiendo la cadena lee el numero como str
console.log(juntos);
juntos = nombre + (78 + 17);//Aqui se puede diferenciar a través de los paréntesis
console.log(juntos);
juntos = 78 + 17 + nombre;// aca suma y despues lo concatena
console.log(juntos);// CONTEXTO STRING O CONTEXTO CADENA

nombre += apellido; // Tercera Concatenación usando el operador simplificado
console.log(nombre);

//Hoy ya no se usa var, se utiliza let y const
let nombre2 = "Pedro";
console.log(nombre2);

const apellido2 = "Lepes";
//apellido2 = "Peres"; Una constante no puede ser modificada
console.log(apellido2)

let x, y;//Se pueden declarar, o crear varias variables dentro de una misma linea
x = 17, y=21; //Se puede hacer asignacion de varias variables dentro de la misma linea
let z = x + y; //se asigna el valor de la asignacion
console.log(z) //Case sensitive, son importante las mayusculas


let _1num = 31; //no utilizar numeros para iniciar el nombre de una variable
let rompiendo = "rompe";//No se pueden utilizar palabras reservadas

console.log(_1num)
console.log(rompiendo)
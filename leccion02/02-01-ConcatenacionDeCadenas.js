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
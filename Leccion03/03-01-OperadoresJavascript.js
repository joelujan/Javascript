//Ejercicio para encontrar numeros pares e impares
let parImpar = 10;
if(parImpar % 2 == 0){
    console.log("Es un numero par");
}else{
    console.log("Es un numero impar");
}
//Ejercicio: es mayor de edad
let edad = 18, adulto=18;
if (edad >= adulto){
    console.log("Usted es una persona adulta");
}else{
    console.log("Usted es una persona menor de edad");
}

//Ejercicio: Dentro de un rango
let dentroRango = 12;
let valMin = 0, valMax = 10;
if (dentroRango >= valMax && dentroRango <= valMax){
    console.log('Está dentro del rango establecido');
} else {
    console.log('Está fuera del rango establecido');
}
//Ejercicio: Si el padre puede asistir al juego de su hijo
let vacaciones = false, diaDescanso = true;
if (vacaciones || diaDescanso){
    console.log("El padre puede asistir al juego de su hijo");
}else {
    console.log("El padre no puede asistir al juego de su hijo");
}
//Operador ternario
let resultado2 = 3 > 2 ? "Verdadero" : "Falso";
console.log(resultado2)
let numero = 12;
resultado2 = numero % 2 == 0 ? "Es un numero par": "Es un numero impar";
console.log(resultado2)

//Convertir String a numero
let miNumero = "19"; //Es una cadena
console.log(typeof miNumero);
let age = Number(miNumero);
console.log(typeof age);
//Funcion isNan
if(isNaN(age)){// No es un numero = is not a number (devuelve un booleano)
    console.log("La variable no es un numero solamente");
}else {
    if (age >= 18 ){
        console.log("Puede votar");
    }
    else{
        console.log("Muy joven para votar");
    }
}

//Operador Ternario
let resultado3 = age >= 18 ? "Puede votar" : "Muy joven para votar";
console.log(resultado3);

//
/* Desafio 1: 
Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
let dia = prompt("¿Qué día de la semana es?").toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
if (dia === "sabado" || dia === "domingo") {
    alert("¡Buen fin de semana!");
} else {
    alert("¡Buena semana!");
}
*/
/* Desafio 2:
Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
let numero= prompt("Ingresa un número:");
if (numero > 0) {
    alert ("El número que ingresaste es positivo"); 
    } else if (numero < 0) {
        alert ("El número que ingresaste es negativo");
    } else {
        alert ("El número que ingresaste es cero");
    }
    */

    // Desafio 3:
    /*Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.".
let puntuacion= prompt("Ingresa tu puntuación:");
if (puntuacion >= 100) {
    alert ("¡Felicidades, has ganado!");
} else {
    alert ("Intentalo nuevamente para ganar.");
}  */

    // Desafio 4:

  /* Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.
let saldo = 1000;
alert(`Tu saldo actual es: $${saldo}`); */

/* Desafio 5:
//Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.

let nombre = prompt ("Ingrese su nombre: ");
alert (`¡Bienvenid@, ${nombre}!`);*/

/* desafio 6:
let cantidadNumeros = prompt('Ingrese la cantidad de números para el cálculo del promedio:');
let suma = 0;
let contador = cantidadNumeros;

while(contador > 0){
    let numero = parseInt(prompt('Ingrese el numero:'));
    suma += numero;
    contador --
}

let promedio = suma / cantidadNumeros;

alert (`El promedio es ${promedio}`);

console.log(promedio); */

/* Desafio 3.1:
Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.

let contador = 1;
while (contador <=10) {
    alert(`${contador}`);
    contador++;
    
}  */

/* Desafio 3.2:
Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número. 

let contador = 10;

while (contador >= 0) {
    alert (`${contador}`);
    contador--;
}
*/

/* Desafio 3.3: 
Crea un programa de cuenta regresiva. Pide un número y cuenta desde 0 
hasta ese número utilizando un bucle 'while' en la consola del navegador.
 

let numero = prompt (" Ingresa el número desde el cual quieres que cuente:");

while (numero >= 0) {
    alert (`${numero}`);
    numero--
}
*/
/* Desafio 3.4: 
Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese 
número utilizando un bucle 'while'
 

let numero = prompt (" Ingresa el número hasta el cual quieres que cuente:");
let contador = 0;

while (contador <= numero){
    alert (`${contador}`);
    contador++
}
*/

// Desafío 4.1:
/* Crea un programa que utilice console.log para mostrar un mensaje de bienvenida. 

console.log ("Sea bienvendio al programa");
*/

//Desafío 4.2
/*Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log 
para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador. 
let nombre = "Andrea";
console.log (`¡Hola, ${nombre}, Bienvenid@.`);
*/

//Desafío 4.3
/* Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert 
para mostrar el mensaje "¡Hola, [tu nombre]!".
let nombre = "Andrea";
alert (`¡Hola, ${nombre}!`);
*/

//Desafío 4.4
/* Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. 
Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador. 

let respuesta = prompt ("¿Cuál es el lenguaje de programación que más te gusta?");
console.log (`${respuesta}`);
*/

//Desafío 4.5
/* Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos 
de tu elección. Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera 
variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y 
[valor2] es igual a [resultado]." en la consola.
let valor1 = 2;
let valor2 = 3;
let resultado = valor1 + valor2;
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}`);
*/

//Desafío 4.6
/*Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu 
elección. Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable 
llamada "resultado". Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y 
[valor2] es igual a [resultado]." en la consola. 
let valor1 = 3;
let valor2 = 4;
let resultado = valor1 - valor2;
console.log(`La diferencia entre ${valor1} y ${valor2} es igual a ${resultado}`);
*/

//Desafío 4.7
/*Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if 
para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola. 
let edad = prompt ("Ingrese su edad por favor:");
if(edad >= 18){
    console.log("Lo sentimos, ya puedes ir a la carcel. Así que piensa bien lo que haces");
} else {
    console.log("Felicidades, eres un niño. Puedes hacer lo que quieras sin ninguna responsabilidad");
}
    */

//Desafío 4.8
/*Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, 
negativo o cero utilizando un if-else y muestra el mensaje correspondiente. 
let numero = prompt("Introduce un número:");

if(numero > 0){
    alert("El número que seleccionaste es positivo");
} else if(numero < 0){
     alert("El número que seleccionaste es negativo");
} else {
    alert("El número que seleccionaste es cero");
}
*/

//Desafío 4.9
/*Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.
let contador = 1;
while(contador <= 10){
    console.log (`${contador}`);
    contador++
}
    */

//Desafío 4.10
/*Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else 
para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola. 
let nota = 10;
if (nota >= 7) {
    console.log ("aprobado");
} else {
    console.log ("Reprobado")
}
*/

//Desafío 4.11
/*Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.
console.log(Math.random());
*/

//Desafío 4.12
/*Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola. 
console.log(Math.floor(Math.random()*10)+1);
*/

//Desafío 4.13
/*Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.*/
console.log(Math.floor(Math.random()*10000)+1)

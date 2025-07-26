alert("¡Bienvenida y bienvenido a nuestro sitio web!");

// Definición de Variables 

let nombre="Lua"; // Nombre de la usuaria o usuario
let edad=25; // Edad de la usuaria o usuario
let numeroDeVentas=50; // Número de ventas realizadas por la usuaria o usuario
let saldoDisponible=1000; // Saldo disponible de la usuaria o usuario

//alert("¡Error! Completa todos los campos");

let mensajeDeError = "¡Error! Completa todos los campos";

alert(mensajeDeError);

nombre = prompt("Por favor, ingresa tu nombre:");
edad = prompt("Por favor, ingresa tu edad:");

if (edad >= 18) {
    alert("¡Puedes obtener tu licencia de conducir!")
}
/* Desafío 1.2 :Cambia el contenido de la etiqueta h1 con document.querySelector y asigna 
el siguiente texto: "Hora del Desafío". */
let titulo = document.querySelector('h1');
titulo.innerHTML= "Hora del Desafío"

/*Desafío 1.3: Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que
 se presione el botón "Console". */
 function botonConsola(){
    console.log("El botón fue clicado");
 }

 /*Desafío 1.4: Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando 
 el nombre de una ciudad de Brasil. Luego, muestra una alerta con el mensaje concatenando la respuesta
  con el texto: "Estuve en {ciudad} y me acordé de ti".*/
  function preguntaUsuario(){
    let ciudadBrasil = prompt("Ingresa el nombre de una ciudad de Brasil");
    alert(`Estuve en ${ciudadBrasil} y me acordé de ti`);
  }
/*Desafío 1.5: Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se 
presione el botón "Alerta".*/
function botonAlerta(){
    alert("Yo amo JS");
}

/*Desafío 1.6: Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en 
una alerta.*/
function sumaDeNumeros(){
   let numero1 = parseInt(prompt("Dame un número:"));
   let numero2 = parseInt(prompt("Dame otro número:"));
   let resultado = numero1+numero2;
   alert(`La suma de ${numero1} y ${numero2} es ${resultado}`);
}

/* Desafío 2.1: Crear una función que muestre "¡Hola, mundo!" en la consola. */
function mensajeEnConsola(){
   console.log("¡Hola, mundo!");
}
mensajeEnConsola();

/*Desafío 2.2: Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!"
 en la consola. */

 function saludarNombre (){
   let nombre = prompt("¿cuál es tu nombre?");
   console.log(`¡Hola, ${nombre}`);
 }
 saludarNombre();

 /*Desafío 2.3: Crear una función que reciba un número como parámetro y devuelva el doble de ese número.*/
 function dobleDeUnNumero(numero){
   return numero * 2;
 }
console.log(dobleDeUnNumero(10));

/*Desafío 2.4: Crear una función que reciba tres números como parámetros y devuelva su promedio.*/
function promedioDeTresNumeros(numero1, numero2, numero3){
   return (numero1 + numero2 + numero3)/ 3;
}
console.log(promedioDeTresNumeros(4,5,7));

/*Desafío 2.5: Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.*/
/*Esta es mi forma
function numeroMayor (numero1, numero2){
   if(numero1 > numero2){
      return numero1;
   }else{
      return numero2;
   }
      */

   function numeroMayor(a, b) {
  return a > b ? a : b;
}
console.log (numeroMayor(7,5));

/*Desafío 2.6: Crear una función que reciba un número como parámetro y devuelva el resultado de 
multiplicar ese número por sí mismo.*/
function multiploDeSiMismo (numero){
   return numero*numero;
}
console.log (multiploDeSiMismo(10));
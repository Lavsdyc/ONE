/* Desafío 1.2 :Cambia el contenido de la etiqueta h1 con document.querySelector y asigna 
el siguiente texto: "Hora del Desafío". 
let titulo = document.querySelector('h1');
titulo.innerHTML= "Hora del Desafío"

Desafío 1.3: Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que
 se presione el botón "Console". 
 function botonConsola(){
    console.log("El botón fue clicado");
 }

 Desafío 1.4: Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando 
 el nombre de una ciudad de Brasil. Luego, muestra una alerta con el mensaje concatenando la respuesta
  con el texto: "Estuve en {ciudad} y me acordé de ti".
  function preguntaUsuario(){
    let ciudadBrasil = prompt("Ingresa el nombre de una ciudad de Brasil");
    alert(`Estuve en ${ciudadBrasil} y me acordé de ti`);
  }
/*Desafío 1.5: Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se 
presione el botón "Alerta".
function botonAlerta(){
    alert("Yo amo JS");
}

Desafío 1.6: Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en 
una alerta.
function sumaDeNumeros(){
   let numero1 = parseInt(prompt("Dame un número:"));
   let numero2 = parseInt(prompt("Dame otro número:"));
   let resultado = numero1+numero2;
   alert(`La suma de ${numero1} y ${numero2} es ${resultado}`);
}

Desafío 2.1: Crear una función que muestre "¡Hola, mundo!" en la consola. 
   console.log("¡Hola, mundo!");
}
mensajeEnConsola();

Desafío 2.2: Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!"
 en la consola. 

 function saludarNombre (){
   let nombre = prompt("¿cuál es tu nombre?");
   console.log(`¡Hola, ${nombre}`);
 }
 saludarNombre();

 Desafío 2.3: Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
 function dobleDeUnNumero(numero){
   return numero * 2;
 }
console.log(dobleDeUnNumero(10));

Desafío 2.4: Crear una función que reciba tres números como parámetros y devuelva su promedio.
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
     

   function numeroMayor(a, b) {
  return a > b ? a : b;
}
console.log (numeroMayor(7,5));

/*Desafío 2.6: Crear una función que reciba un número como parámetro y devuelva el resultado de 
multiplicar ese número por sí mismo.
function multiploDeSiMismo (numero){
   return numero*numero;
}
console.log (multiploDeSiMismo(10)); */

/* Desafíos 4.1: Crea una lista vacía llamada "listaGenerica". 

let listaGenerica = [];*/

/* 4.2: Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los 
siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

let listaLenguajes = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];*/ 

/* 4.3:Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
listaLenguajes.push ('Java', 'Ruby', 'GoLang');*/

/* 4.4: Crea una función que muestre en la consola todos los elementos de la lista
 "lenguagesDeProgramacion.

 function mostrarElementosDeLista (){
   let contador = 0;

   while (contador < listaLenguajes.length ){
      console.log(listaLenguajes[contador]);
      contador++;
   }
 }
 mostrarElementosDeLista(); */

 /* 4.5: Crea una función que muestre en la consola todos los elementos de la lista
  "lenguagesDeProgramacion en orden inverso. 

function mostrarElementosDeListaInverso (){
   let contador = listaLenguajes.length;

   while (contador >= 0 ){
      console.log(listaLenguajes[contador]);
      contador --;
   }
 }
mostrarElementosDeListaInverso ();*/

/* 4.6: Crea una función que calcule el promedio de los elementos en una lista de números.
let listaNumeros = [];

function promedioNumerosLista (){
   let suma = 0;
   let i = 0;

   while (i < listaNumeros.length) {
      suma += listaNumeros[i];
      i++;
   }

   let promedio = suma / listaNumeros.length;
   console.log (promedio);

}
listaNumeros = [5,10,15,10,15];
promedioNumerosLista();
*/


 /*4.7:Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista. 
 
 function mostrarMayorMenor() {
  let numeroMayor = listaNumeros[0]; //se les asigna de inmediato el primer valor de la lista
  let numeroMenor = listaNumeros[0];
  let i = 1; //inicia a comparar la segunda posicion con la primera;

  while (i < listaNumeros.length) {
    if (listaNumeros[i] > numeroMayor) {
      numeroMayor = listaNumeros[i];
    }

    if (listaNumeros[i] < numeroMenor) {
      numeroMenor = listaNumeros[i];
    }

    i++;
  }

  console.log(`El número mayor es: ${numeroMayor}`);
  console.log(`El número menor es: ${numeroMenor}`);
}

let listaNumeros = [10, 2, 3, 4, 5, 6, 0];
mostrarMayorMenor(); */

/* 4.8: Crea una función que devuelva la suma de todos los elementos en una lista. 

function sumaNumeros (){
   let suma = 0;
   let i = 0;

   while (i < listaNumeros.length) {
      suma += listaNumeros[i];
      i++;
   }
   console.log (`la suma de los números es: ${suma}`);

}
listaNumeros = [1,2,3,4,8];
sumaNumeros(); */

/* 4.9: Crea una función que devuelva la posición en la lista donde se encuentra un 
elemento pasado como parámetro, o -1 si no existe en la lista. 
function buscarElemento(lista, elemento) {
  let i = 0;

  while (i < lista.length) {
    if (lista[i] === elemento) {
      return i; // 🎯 ¡Lo encontré! Devuelvo su posición
    }
    i++;
  }

  // 📉 Si llegué hasta aquí, recorrí toda la lista y no lo encontré
  return -1;
}

//ejemplo de que funciona
let listaEjemplo = ['pipo', 'canelo', 'blindy', 'speedy'];

console.log(buscarElemento(listaEjemplo, 'speedy')); //  3
console.log(buscarElemento(listaEjemplo, 'snoopy'));   // -1
*/

/* 4.10:Crea una función que reciba dos listas de números del mismo 
tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
function sumaListas (lista1, lista2){
   let i=0;
   let listaResultado = [];

   while (i < lista1.length){
      listaResultado.push(lista1[i] + lista2[i]);
      i++;
   } 
   return listaResultado;
}
let lista1 = [1,2,3,4,5];
let lista2 = [10,20,30,40,50];
console.log(sumaListas(lista1, lista2));
*/

/*4.11: Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.] */

function cuadradoDeLista (lista){
   let i =0;
   let listaResultado = [];

   while (i < lista.length){
      listaResultado.push(lista[i]*lista[i]);
      i++
   }
   return listaResultado;

}
let lista = [2,3,4,5,6]
console.log(cuadradoDeLista(lista));


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
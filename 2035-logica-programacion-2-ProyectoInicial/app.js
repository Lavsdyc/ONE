let numeroMaximo = 10;
let numeroSecreto = generarNumeroSecreto();

//console.log(numeroSecreto);

function asignarTextoEtiqueta(etiqueta,texto){
    let etiquetaHTML = document.querySelector(etiqueta);
    etiquetaHTML.innerHTML = texto;
    return;

}

asignarTextoEtiqueta('h1','Juego del número secreto');

asignarTextoEtiqueta('p',`Ingresa un número del 1 al ${numeroMaximo}`);

function generarNumeroSecreto(){
   return Math.floor(Math.random()*numeroMaximo)+1;  
}

/* Eso se reduce gracias a usar la función:
let titulo = document.querySelector('h1');
titulo.innerHTML = "Juego del núnero secreto"

let texto = document.querySelector('p');
texto.innerHTML = `Ingresa un número del 1 al ${numeroMaximo}`;*/

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('numeroUsuario').value);
    console.log(numeroDeUsuario)
    return;
}
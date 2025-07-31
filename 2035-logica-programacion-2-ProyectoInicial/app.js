let numeroMaximo = 10;

let titulo = document.querySelector('h1');
titulo.innerHTML = "Juego del núnero secreto"

let texto = document.querySelector('p');
texto.innerHTML = `Ingresa un número del 1 al ${numeroMaximo}`;

function intentoDeUsuario() {
    alert("click desde la función");
}
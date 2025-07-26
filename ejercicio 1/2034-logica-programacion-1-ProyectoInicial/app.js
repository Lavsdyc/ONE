alert("Bienvenido al juego del número secreto");

//declaración de variables
let numeroSecreto = 5; // Número que la computadora ha pensado
let numeroUsuario = prompt("Inserta el número que crees que he pensado (del 1 al 10):");

//console.log(numeroUsuario);

if (numeroUsuario == numeroSecreto) {
    alert(`¡Felicidades! Acertaste, el número era ${numeroSecreto}.`); // Si el número es correcto
} else {
    alert(`Lo siento, no has acertado el número. El número era ${numeroSecreto}.`); // Si el número es incorrecto

}


let numeroSecreto = 3; // Número que la computadora ha pensado
let numeroUsuario = prompt("Inserta el número que crees que he pensado (del 1 al 10):");

alert("¡He pensado en un número del 1 al 10!");

console.log(numeroUsuario);

if (numeroUsuario == numeroSecreto) {
    alert("¡Felicidades! Has acertado el número.");
}

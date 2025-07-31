alert('Bienvenido al juego del número secreto');

let intento = prompt('Elige un número entre 1 y 10');
console.log ('Valor de intento:', intento);

let numeroSecreto = 4;
console.log('Resultado de la comparación:', intento == numeroSecreto);

if (intento == numeroSecreto) {
    alert('Adivinaste');
} else {
    // Agrega un console.log para verificar el valor de "numeroSecreto" cuando el jugador se equivoca
    console.log(`El número que eligió fue ${intento}, pero el número secreto era ${numeroSecreto}`);
    alert('El número secreto era ' + numeroSecreto);
}

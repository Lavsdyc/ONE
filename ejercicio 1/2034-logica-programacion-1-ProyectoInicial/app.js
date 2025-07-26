alert("Bienvenido al juego del número secreto");

//declaración de variables
let numeroSecreto = 6; // Número que la computadora ha pensado
let numeroUsuario;
let cantidadDeIntentos=1;//porque desde la primera vez que interactuan ya gastan su primer intento
let palabraIntento= "intento"; //para que no haya error gramatical en la alerta de victoría

while (numeroUsuario != numeroSecreto) {
    
    numeroUsuario= prompt("Inserta el número que crees que he pensado (del 1 al 10):");

    //console.log(numeroUsuario);

    if (numeroUsuario == numeroSecreto) { // Si el número es correcto
        alert(`¡Felicidades! Acertaste, el número era ${numeroSecreto}. Lo lograste en ${cantidadDeIntentos} ${palabraIntento}`); 

    } else { // Si el número es incorrecto
        if (numeroUsuario < numeroSecreto) {
            alert (`El número es mayor que ${numeroUsuario}`);
        } else {
            alert (`El número es menor que ${numeroUsuario}`);
        }

        //Se incrementa el contador de intentos cuando no se acierta
        cantidadDeIntentos = cantidadDeIntentos + 1;
        //la palabra intento se hace plural porque ya se intento mas de una vez
        palabraIntento = "intentos";

    }
}

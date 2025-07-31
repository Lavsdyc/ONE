alert("Bienvenido al juego del número secreto");

//declaración de variables
let numeroMaximo = 100;
let numeroSecreto = Math.floor(Math.random()* numeroMaximo)+1; // Número que la computadora ha pensado
let numeroUsuario;
let cantidadDeIntentos=1;//porque desde la primera vez que interactuan ya gastan su primer intento
//let palabraIntento= "intento"; //para que no haya error gramatical en la alerta de victoría
let intentosMaximos= 10;

while (numeroUsuario != numeroSecreto) {
    
    numeroUsuario= parseInt(prompt(`Tienes ${intentosMaximos} intentos para adivinar. Inserta el número que crees que he pensado (del 1 al ${numeroMaximo}):`));

    //console.log(numeroUsuario);

    if (numeroUsuario == numeroSecreto) { // Si el número es correcto
        alert(`¡Felicidades! Acertaste, el número era ${numeroSecreto}. Lo lograste en ${cantidadDeIntentos} ${cantidadDeIntentos == 1 ? 'vez' : 'veces' }`); 

    } else { // Si el número es incorrecto
        if (numeroUsuario < numeroSecreto) {
            alert (`El número es mayor que ${numeroUsuario}`);
        } else {
            alert (`El número es menor que ${numeroUsuario}`);
        }

        //Se incrementa el contador de intentos cuando no se acierta
        // Hay varias formas de incrementar el contador:
        //cantidadDeIntentos = cantidadDeIntentos + 1;
        //cantidadDeIntentos += 1
        cantidadDeIntentos++

        //La primera forma para hacer la palabra "intento" plural: 
        //palabraIntento = "intentos";

        if (cantidadDeIntentos > intentosMaximos) {
            alert(`Has superado el número máximo de ${intentosMaximos} intentos disponibles. El número secreto era: ${numeroSecreto} `);
            break;
        }

    }
}

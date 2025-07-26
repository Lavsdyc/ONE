
alert('Bienvenido al juego del número secreto');
let intento = prompt('Elige un número entre 1 y 10');

let numeroSecreto = 4;

console.log(intento  == numeroSecreto);
if (intento  == numeroSecreto) {
    alert('Acertaste');
} else {
    /* En este caso solo va a imprimir hasta donde llego bien la concatenación:
    alert('El número secreto era ' + numeroSecreto, ' y elegiste ' + intento)

En este caso va a imprimir todo junto:
 alert ('El número secreto era ' + numeroSecreto + intento)

En este caso imprime literalemnte lo que está entre comillas:
 alert('El número secreto era numeroSecreto y elegiste intento');

  */

 alert('El número secreto era ' + numeroSecreto +', pero elegiste ' + intento); // Esta forma imprime correctamente los valores de las variables

}

   
  
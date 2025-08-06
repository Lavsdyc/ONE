let numeroMaximo = 10;
let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados = [];


function asignarTextoEtiqueta(etiqueta,texto){
    let etiquetaHTML = document.querySelector(etiqueta);
    etiquetaHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('numeroUsuario').value);

    if(numeroDeUsuario === numeroSecreto){
        asignarTextoEtiqueta('p',`Acertaste el número secreto en ${intentos} ${(intentos === 1)? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoEtiqueta('p',`El número secreto es menor`);
        } else {
             asignarTextoEtiqueta('p',`El número secreto es mayor`);
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#numeroUsuario').value = "";
}

function condicionesIniciales (){
    asignarTextoEtiqueta('h1','Juego del número secreto');
    asignarTextoEtiqueta('p',`Ingresa un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto);
    intentos = 1;
}

function reiniciarJuego (){
    //Cada vez que se reinicie el juego debe:
    //    1.Limpiar la caja
    limpiarCaja();
    //    2. indicar mensaje de intervalo de numeros
    //    3. generar numero aleatorio
    //   4. Reiniciar el numero de intentos 
    condicionesIniciales();
    //   5. Desahibilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //Si se sortean todos los números:
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoEtiqueta('p', 'Ya se generaron todos los números posibles. Reinicia para seguir jugando.');
    }else{

        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

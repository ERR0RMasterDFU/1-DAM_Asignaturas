
// FUNCIÓN QUE CALCULA LOS GRADOS DE ALCOHOL (RECIBE AMBAS DENSIDADES Y LAS VERIFICA) ----------------------------------------------------------------------------

function calcularGrados(densInicial, densFinal) {
    if (densInicial <= 0 || densFinal <= 0 || densInicial <= densFinal) {
        return -1;
    }
    const grados = (densInicial - densFinal) / 7.45;
    return parseFloat(grados.toFixed(2));    // Redondea a 2 decimales.
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------


// FUNCIÓN PARA AÑADIR MENSAJE ----------------------------------------------------------------------------------------------------------------------------------

function anadirMensaje(mensaje, tipo) {
    const avisoAlert = document.getElementById('aviso');
    let alert;

    switch (tipo) {
        case 'error':
            alert = 'alert-danger';
            break;
        case 'info':
            alert = 'alert-info';
            break;
        case 'success':
            alert = 'alert-success';
            break;
        default:
            alert = 'alert-secondary';
    }

    avisoAlert.innerHTML = `<div class="alert ${alert}">${mensaje}</div>`;
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------


// FUCNIÓN QUE MANEJA AL CÁLCULO (RECOGE LOS DATOS, LLAMA A "calcularGrados", Y USA "anadirMensaje" PARA MOSTRAR EL RESULTADO O MENSAJE DE ERROR) ---------------

function botonCalcularPulsado() {

    const densInicialIntroducida = document.getElementById('densInicial');
    const densFinalIntroducida = document.getElementById('densFinal');
    const densInicial = parseFloat(densInicialIntroducida.value);
    const densFinal = parseFloat(densFinalIntroducida.value);

    const resultado = calcularGrados(densInicial, densFinal);

    if (resultado === -1) {
        anadirMensaje('Datos erróneos. La densidad inicial debe ser mayor que la final y ambos deben ser positivos.', 'error');
    } else {
        anadirMensaje(`Su cerveza tendrá ${resultado} grados`, 'success');
    }

}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------


// FUCNIÓN QUE LIMIPIA LOS DATOS (VACÍA EL FORMULARIO Y ELIMINA CUALQUIER MENSAJE MOSTRADO) ---------------------------------------------------------------------

function botonLimpiarPulsado() {

    document.getElementById('densInicial').value = '';
    document.getElementById('densFinal').value = '';
    anadirMensaje('', 'info');
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btnCalcular').addEventListener('click', botonCalcularPulsado);
    document.getElementById('btnLimpiar').addEventListener('click', botonLimpiarPulsado);

});

//---------------------------------------------------------------------------------------------------------------------------------------------------------------
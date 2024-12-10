let num1 = prompt('Dime un número.');
let num2 = prompt('Dime otro número.');

if(isNaN(num1)&&!isNan(num2)){
    let resultado 
    alert(parseInt(num1)+poarseInt(num2))
}else{
    alert('¡Dime un número YAAAAAAAAAAAAAAAAAAAAAAAAAAAAA!')
}


//----------------------------------------------------------------------------------------------------------------------------------


function leerArrayPorTeclado(){

    let continuar;
    let miArray = new Array();

    dato = prompt("Diga algo para guardaren un array.")

    do{
        let dato;
        dato = prompt ("Diga algo para guardar")
        continuar = dato!=='';

        if(continuar){
            miArray.push(dato)
        }

    }while(continuar);

    return miArray

}

//alert('El array tiene '+miArray.length+' elementos  y es '+miArray)

numeroDni<0 || numeroDni>999999?alert('Número no válido'):numeroDni%23;


//----------------------------------------------------------------------------------------------------------------------------------------------


//EJERCICIO 1 - EXAMEN RAFA

function pedirNombres(){
    let resultado = new Array();
    
    let nombres = prompt('Por favor, introduzca un nombre.');

    while(isNan(texto)){
        resultado.push(texto)
        let nombres = prompt('Por favor, introduzca un nombre.');
    }

    return resultado;
}



//EJERCICIO 2 - EXAMEN RAFA

function camelize(str){
    //border-left-radius -> borderLeftRadius

    //Quitamos  guiones y separamos palabras.

    let palabrasSueltas = str.split('-');

    //Cambiar primera letra a mayúscula (a partir de la 2ª).

    for(let i=1; i<palabrasSueltas.length; i++){
        let primeraEnMayuscula = palabrasSueltas[i].charAt(0).toUpperCase();
        palabrasSueltas[i] = primeraEnMayuscula+palabrasSueltas[i].substring(1);
    }

    //Unir las palabras.

    return palabrasSueltas.join('');
}



//EJERCICIO 4 - EXAMEN RAFA

function principal(){
    let propiedadesCSS = pedirNombres();

    for(let i=0; i<propiedadesCSS.length; i++){
        
        propiedadesCSS[i] = camelize(propiedadesCSS[i]);

        alert("El elegido es "+sortear(propiedadesCSS));

    }

}

principal();
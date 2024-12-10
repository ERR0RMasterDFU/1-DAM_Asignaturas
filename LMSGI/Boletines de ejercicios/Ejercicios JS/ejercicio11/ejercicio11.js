/*11) Realiza un script que pregunte al usuario por un tamaño de array y pida tantos números como el tamaño indicado, de manera que los vaya
almacenando en el array. Una vez pedidos todos los datos, imprima por pantalla el array y la suma de todos sus elementos. El programa no se
detendrá aquí, sino que continuará pidiendo números. Por cada número, debe eliminar el primer elemento del array, añadir el nuevo número al 
final del array y actualizar la suma. Se continuará la ejecución hasta que se introduzca cualquier cosa que no sea un número positivo.*/

let tamanioArray = prompt("Por favor, introduzca el tamaño del array.");

let Arr = new Array();

Arr.length = tamanioArray;

function introducirNumerosEnArray(Arr){

    for(let i=0; i<Arr.length; i++){
        let numeroArray = prompt("Por favor, introduzca un número.");
        Arr[i] = numeroArray;
    }
}

introducirNumerosEnArray(Arr);

alert(Arr);

function sumarNumeros(Arr){

    let total=0;

    for(let i=0; i<Arr.length; i++){
        total = total + Number(Arr[i]);  //LA INSTRUCCIÓN "NUMBER()" TRANSFORMA UN STRING EN UN NÚMERO.
    }

    return alert(total);
    
}

sumarNumeros(Arr);

function introducirNuevoNumeroArray(Arr){

    do{

        let nuevoNumero = prompt("Por favor, introduzca un número.");

        Arr.shift();
        Arr.push(nuevoNumero);

        sumarNumeros(Arr);

    }while(nuevoNumero!=nuevoNumero.NaN || nuevoNumero>=0);

}

introducirNuevoNumeroArray(Arr);

let n = prompt("Por favor, introduzca un número entero.");

let factorial = 1;
let indice = 0;

for(let i=0; i<n; i++) {
    factorial = (n-indice)*factorial;
    indice++;
}

alert ("El factorial de "+n+" es igual a "+factorial+".");
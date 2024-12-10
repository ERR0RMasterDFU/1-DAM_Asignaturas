//HE CAMBIADO EL VAR (VERSIÓN ANTIGUA) POR LET (VERSIÓN MODERNA).
let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

//APARTADO A)

let numeroDni = prompt("Por favor, introduzca el número del DNI.");

let letraDni = prompt("Por favor, introduzca la letra del DNI.")

//APARTADOS B) - C) - D)

alert(numeroDni<0||numeroDni>99999999?"ERROR. Lo sentimos, el número proporcionado no es valido.":letras[numeroDni%23]==letraDni?"El número y la letra de DNI son correctos.":"La letra que ha indicado no es correcta.");

// Primero comprueba si el número es válido. Si NO lo es muestra un mensaje y NADA más. Si LO es compara la letra del usuario con la del índice del array.
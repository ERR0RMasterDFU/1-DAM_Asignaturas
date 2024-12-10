let cadena = prompt("Por favor, introduzca una palabra o frase para saber si es un palíndromo."); 

function palindromo(cadena){
    let cadenaComparable = cadena.toLowerCase().replace(/\s/g, '');   
    
    /*En este caso, una vez convertida en minúsculas toda la cadena de caracteres quiero eliminar los espacios en blanco existentes en ella. Para ello, 
    podemos utilizar el método "replace()" para reemplazar cualquier caracter por otro que queramos de la cadena. Para lograr nuestro objetivo podemos 
    hacer uso de las expresiones regulares: el meta caracter "\s" sirve para encontrar cualquier espacio en blanco por medio de una expresion regular.
    Y la bandera "g" le dice a JavaScript no sólo actuar sobre el primer caracter que encuentre, sino todos los que existan en la cadena de caracteres.*/

    let cadenaRevertida = cadenaComparable.split("").reverse().join("");

    alert(cadenaComparable==cadenaRevertida?"ES UN PALÍNDROMO.":"NO ES UN PALÍNDROMO.");

}

palindromo(cadena);
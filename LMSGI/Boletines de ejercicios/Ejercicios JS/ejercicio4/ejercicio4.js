//HE CAMBIADO EL VAR QUE VENÍA EN EL EJERCICIO POR UN LET.
let valores = [true, 5, false, "hola", "adios", 2];

/*a) Determinar cuál de los dos elementos de texto es mayor utilizando exclusivamente los dos valores booleanos del array, determinar los operadores necesarios para obtener un 
resultado true y otro resultado false*/

let mayor = (valores[3] > valores[4])?valores[3]:valores[4];
alert('El mayor es '+mayor);

alert(valores[0]||valores[2]);
alert(valores[0]&&valores[2]);

/*c) Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos*/

alert(valores[1]+valores[5]);
alert(valores[1]-valores[5]);
alert(valores[1]*valores[5]);
alert(valores[1]/valores[5]);
alert(valores[1]%valores[5]);
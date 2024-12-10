let texto = prompt("Por favor, introduzca una cadena de texto.");

function textoMinMayMix(texto) {
    alert(texto==texto.toLowerCase()?"La cadena está formada sólo por minúsculas.":texto==texto.toUpperCase()?"La cadena está formada sólo por mayúsculas":"La cadena está formada por una mezcla de minúsculas y mayúsculas.")
}

textoMinMayMix(texto);

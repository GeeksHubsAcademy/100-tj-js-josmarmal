// Escriba un programa corto que imprima un rango de números del 1 a N.

// Para cada múltiplo de 3, imprima "Geeks" en lugar del número.
// Para cada múltiplo de 5, imprima "Hubs" en lugar del número.
// Para los números que son múltiplos de 3 y 5, imprima "GeeksHubs" en lugar del número.
// Cada número debe de estar en una línea nueva.
// El resultado se debe de ser una string.

function geekshubs(index) {

    let resultado = "";

    for (let i = 1; i <= index; i++) {

        if (i % 3 == 0 && i % 15 != 0) {
            resultado += "Geeks"+"\n"
        }
        if (i % 5 == 0 && i % 15 != 0) {
            resultado += "Hubs"+"\n"
        }
        if (i % 15 == 0) {
            resultado += "GeeksHubs"+"\n"
        }    
        if (i % 3 != 0 && i % 5 != 0 && i % 15 != 0) {
            resultado += i+"\n";
        }     
    }

    return resultado;
}

module.exports = geekshubs;

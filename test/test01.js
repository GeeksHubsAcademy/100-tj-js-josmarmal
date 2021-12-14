function geekshubs(index) {

    let cadena= '';

    for (let i = 1; i <= index; i++) {

        if ((i % 3 == 0)&&(i % 5 == 0)) {

            cadena += "GeeksHubs\n";
           
        } else if (i % 3 == 0) {

            cadena += "Geeks\n";

        } else if (i % 5 == 0){
            
            cadena += "Hubs\n";

        } else {
            cadena += `${i}\n`;
        }
    }

    return cadena;
}
module.exports = geekshubs;

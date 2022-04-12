function geekshubs(index) {
    let resultado = '';

    for (let i=1; i<=index; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            resultado += 'GeeksHubs\n';
        } else if (i % 3 === 0) {
            resultado += 'Geeks\n';
        } else if (i % 5 === 0) {
            resultado += 'Hubs\n'
        } else {
            resultado += i + '\n';
        }
    }

    return resultado;
}
module.exports = geekshubs;

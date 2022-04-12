function geekshubs(index) {
    let result = '';

    for (let i = 1; i <= index; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result += 'GeeksHubs\n';
        } else if (i % 3 === 0) {
            result += 'Geeks\n';
        } else if (i % 5 === 0) {
            result += 'Hubs\n';
        } else {
            result += i + '\n';
        }
    }
    return result;
}
module.exports = geekshubs;

function geekshubs(index) {
    for (let i = 1; i <= index; i++) {

        if (index % 3 == 0) {
            return "Geeks";

        } else if (index % 5 == 0) {
            return "Hubs";

        } else {
            return i;
        }
    }
}
module.exports = geekshubs;

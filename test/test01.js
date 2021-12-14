function geekshubs(index) {
    for (let i = 1; i <= index; i++) {

        if (num % 3 == 0) {

            return "Geeks";

        } else if (index % 5 == 0) {

            return "Hubs";

        } else if ((num % 3 == 0) && (num % 5 == 0)) {

            return "GeeksHubs";
        } else {
            return i;
        }

    }
}
module.exports = geekshubs;

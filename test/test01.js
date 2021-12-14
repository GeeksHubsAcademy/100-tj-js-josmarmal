function geekshubs(index) {

    for (let i = 1; i <= index; i++) {

        if (i % 3 == 0) {

            return "Geeks";

        } else if (i % 5 == 0) {

            return "Hubs";

        } else if ((i % 3 == 0)&&(i % 5 == 0)){

            return "GeeksHubs";
        } else {
            return i;
        }

    }
}
module.exports = geekshubs;

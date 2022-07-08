function geekshubs(index) {

    const multiplo = (num, div) => {
        if (div == 0) {
            return false
        } else {
            return (num % div == 0)
        }
    }

    const makeString = (num) => {
        let st = "";
        for (let i = 1; i <= num; i++) {
            if ((multiplo(i, 3)) && (multiplo(i, 5))) {
                st += "GeeksHubs\n";
            } else if (multiplo(i, 3)) {
                st += "Geeks\n"
            } else if (multiplo(i, 5)) {
                st += "Hubs\n"
            } else {
                st += `${i}\n`
            }
        }
        return st
    }

    return makeString(index);
}
module.exports = geekshubs;

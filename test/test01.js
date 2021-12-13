function geekshubs(index) {
    var msn = '';

    for (let i = 1; i <= index; i++) {
        
      if (i%3==0 && i%5==0) {
            msn = msn + "GeeksHubs\n";

        } else if (i%3==0) {
            msn = msn + "Geeks\n";

        } else if (i%5==0) {
            msn = msn + "Hubs\n"
        }
    }
    return msn;
}

module.exports = geekshubs;

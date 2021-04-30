function geekshubs(index) {
    var msn = '';

    for (let index = 1; index <= N; index++) {
        
      if (index%3==0 && index%5==0) {
            msn = msn + "GeeksHubs\n";

        } else if (index%3==0) {
            msn = msn + "Geeks\n";

        } else if (index%5==0) {
            msn = msn + "Hubs\n"
        } else {
            msn += index+"\n"
        }
    }
    return msn;
}
module.exports = geekshubs;

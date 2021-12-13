function geekshubs(index) {
  for (let i = 0; i <= index; i++) {
    let string = "";
    if (i % 3 == 0) {
      string += "Geeks\n";
    } else if (i % 5 == 0) {
      string += "Hubs\n";
    } else if (i % 3 == 0 && i % 5 == 0) {
      string += "GeeksHubs\n";
    } else {
      string += `${i}\n`;
    }
  }
}
module.exports = geekshubs;

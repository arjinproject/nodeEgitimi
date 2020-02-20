/**
 * bir txt dosyasını okuyacağız
 */

const fs = require("fs"); // nodejs te default var olan bir paket

filename = __dirname + '/demo.txt';
fs.readFile(filename, (error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log(data.toString()+" ilk okuma");
    }
    console.log("Dosya okuma işlemi bitti1");
});

const demoDosyasi = fs.readFileSync(filename, (error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log(data.toString());
    }  
});
console.log(demoDosyasi.toString()+" ikinci okuma");
console.log("Dosya okuma işlemi bitti2");
/**
 * demo.txt diye bir dosya oluşturuyoruz önce. 
 * Sonra bu kodu çalıştırınca o doya silinir.
 */

const fs = require("fs"); // nodejs te default var olan bir paket

filename = __dirname + '/demo4.txt';
fs.unlink(filename, (err) => {
    if (err)
        throw err;
    console.log("Dosya silindi");
})
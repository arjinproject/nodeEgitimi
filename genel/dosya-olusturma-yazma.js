/**
 * appenedFile: dosyaya ekleme yapar. Eğer doya yoksa oluşturup öyle ekleme yapar.
 * writefile: dosya içeriğininşn üstüne yazar eski içerik kaybolur. Eğer doya yoksa oluşturup öyle ekleme yapar.
 */

const fs = require("fs"); // nodejs te default var olan bir paket

filename = __dirname + '/demo2.txt';
fs.appendFile(filename, "\n Merhaba kelimesini ekle", (err) => {
    if (err)
        throw err;
    console.log("Dosyaya ekleme yapıldı");
})

filename3 = __dirname + '/demo3.txt';
fs.writeFile(filename3, "\n Merhaba kelimesini ekle", (err) => {
    if (err)
        throw err;
    console.log("Dosyaya ekleme yapıldı");
})
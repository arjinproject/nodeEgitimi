"use strict";  //Son sürüme göre derleme yapmak istiyorsak bunu kullanıyoruz
//@ts-check   // syntax hataları görünsün diye bunu kullanıyoruz.

const http = require("http"); // nodejs default kütüphanesi

const server= http.createServer((req, res) => {
    console.log("bir istekte bulunuldu");
    console.log(req.headers); // istekte bulunan hakkında bilgiler içerir
    res.writeHead(200, {"content-type": "text/html; charset=utf-8"}); 
    // türkçe karakter sorunu üstteki satır ile çözüldü. 200 başarı durum kodudur
    res.write("<b>merhaba</b> dünya");
    res.end();
});

server.listen(3000); // 3000 portunu dinle
/**
 * tarayıcı üzerinde http://localhost:3000 adresine girildiğinde 
 * eğer sunucu açık ise ekrana merhaba yazar
 * 
 */


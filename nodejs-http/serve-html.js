// bir html dosyasını serverden çalıştırmak

const http = require("http"); // nodejs default kütüphanesi
const fs = require("fs");

filename = __dirname + '/index.html';
const server = http.createServer((req, res) => {
    console.log("bir istekte bulunuldu");
    //console.log(req.headers); // istekte bulunan hakkında bilgiler içerir
    res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
    // türkçe karakter sorunu üstteki satır ile çözüldü. 200 başarı durum kodudur
    fs.readFile(filename, (err, data) => {
        if (err)
            throw err;
        res.end(data);
    });
});

server.listen(3000); // 3000 portunu dinle
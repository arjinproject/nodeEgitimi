const http = require("http"); // nodejs default kütüphanesi

const server = http.createServer((req, res) => {
    console.log("bir istekte bulunuldu");
    //console.log(req.headers); // istekte bulunan hakkında bilgiler içerir
    res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
    // türkçe karakter sorunu üstteki satır ile çözüldü. 200 başarı durum kodudur
    if (req.method === "GET") {
        if (req.url === '/')
            res.write("index sayfasındasınız");
        else if (req.url === '/iletisim')
            res.write("iletisim sayfasındasınız");
        else
            res.write("bu sayfa bulunamadı");

    }
    res.end();
});

server.listen(3001); // 3000 portunu dinle
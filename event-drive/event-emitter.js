"use strict";  //Son sürüme göre derleme yapmak istiyorsak bunu kullanıyoruz
//@ts-check   // syntax hataları görünsün diye bunu kullanıyoruz.


//realtime işlemlerde sıklıkla events ler kullanılır

//events paketini import et
const events = require("events");
const evenEmitter = new events.EventEmitter();

// events tanımlama
evenEmitter.on("selamla", () => {
    console.log("Merhaba beni tetikledin");
});

// events tetikleme

evenEmitter.emit("selamla");

// 2 sn sonra gene tetikle aynı işlemi

setTimeout(() => {
    evenEmitter.emit("selamla");
}, 2000);


// Değişken yollama
// events tanımlama
evenEmitter.on("selamla2", (isim) => {
    console.log(`Merhaba beni ${isim} tetikledi...`);
});

// events tetikleme
const isim = "Hamit"
evenEmitter.emit("selamla2", isim);

// Obje yollama
// events tanımlama
evenEmitter.on("selamla3", (obje) => {
    console.log(`Merhaba beni ${obje.isim} ${obje.soyisim} tetikledi...`);
});

// events tetikleme
evenEmitter.emit("selamla3", { isim: "hamit", soyisim: "seyrek" });

// once işlemi: bir event sadece bir sefer tetiklenmesi gerekirse once diye tanımlanır
// events tanımlama
evenEmitter.once("selamla4", () => {
    console.log(`Merhaba beni tek seferlik tetikledin...`);
});

// events tetikleme
evenEmitter.emit("selamla4");
evenEmitter.emit("selamla4"); // selamla4 ü once diye oluşturduğumuz için bu satır çalışmayacaktır
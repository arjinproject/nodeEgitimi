// // fonksiyon durdurulmadığı süre çalışmaya devam eder. Belirli aralıklarla.

// var sayi = 1;
// setInterval(function () {
//     console.log("Selam nasılsın " + sayi);
//     sayi++;
// }, 1000);  // saniyede bir aynı işlemi yapar.


// Belli bir koşula bağlayabiliriz.
// sayı değişkeni 5 olunca sonuçlanıyor.

var sayi = 1;
var interVal = setInterval(function () {
    if (sayi == 5) {
        clearInterval(interVal);
    }
    console.log("Selam nasılsın " + sayi);
    sayi++;

}, 1000);  // saniyede bir aynı işlemi yapar.

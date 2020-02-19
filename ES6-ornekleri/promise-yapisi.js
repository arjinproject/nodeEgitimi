"use strict";  //Son sürüme göre derleme yapmak istiyorsak bunu kullanıyoruz
//@ts-check   // syntax hataları görünsün diye bunu kullanıyoruz.

// callbackhell  birbiri içinde bir sürü callback çağırmak

const asenkronFunction = function (sayi, callback) {
    const sonuc = sayi + 2;
    callback(sonuc);
};

asenkronFunction(2, function (sonuc) {
    console.log(sonuc);
    asenkronFunction(4, function (sonuc) {
        console.log(sonuc);
        asenkronFunction(6, function (sonuc) {
            console.log(sonuc);
            asenkronFunction(8, function (sonuc) {
                console.log(sonuc);
            });
        });
    });
});

/**
 * yukarıdaki yapı saf javascript ile yapılmıştır. Giderek karmaşıklaşmaktadır.
 * Şimdi aynı işi yapan kodu ES6 ile gelmiş olan promise yapısı ile yapalım
 *  */

//resolve örneği
const asenkronFunction2 = () => {
    return new Promise((resolve, reject) => {
        // resolve: işler sorunda giderse bu kullanılır; yolunda gitmez ise ise reject kullanılır
        resolve("Herşey yolunda");
    });
};
asenkronFunction2()
    .then((data) => {
        console.log(data);
        return 1;
    }).then((data) => {
        console.log(data);
        return 2;
    }).then((data) => {
        console.log(data);
    });

//reject örneği. reject olan işlem then bloglarına hiç girmiyor
const asenkronFunction3 = (sayi) => {
    return new Promise((resolve, reject) => {
        // resolve: işler sorunda giderse bu kullanılır; yolunda gitmez ise ise reject kullanılır
        if (sayi == 4)
            resolve("Herşey yolunda");
        reject("Bir sorun var!!");
    });
};

asenkronFunction3(5)
    .then((data) => {
        console.log(data);
        return 1;
    }).then((data) => {
        console.log(data);
        return 2;
    }).then((data) => {
        console.log(data);
    }).catch((error) => {
        console.log(error);
    });
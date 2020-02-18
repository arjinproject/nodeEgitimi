"use strict";  //Son sürüme göre derleme yapmak istiyorsak bunu kullanıyoruz
//@ts-check   // syntax hataları görünsün diye bunu kullanıyoruz.



// ES6 dan önce kullanılan yapı
const degerler = {
    deger1: "deger1",
    deger2: "deger2",
    deger3: "deger3",
}
const deger1 = degerler.deger1;
const deger2 = degerler.deger2;

console.log(deger1, deger2);



// ES6 dan sonra kullanılabilen yapı
const degerler2 = {
    deger1: "deger1",
    deger2: "deger2",
    deger3: "deger3",
    deger4: "deger4",
}
const { deger3, deger4 } = degerler2;
console.log(deger3, deger4);

const degerler3 = {
    deger1: "deger1",
    deger2: "deger2",
    deger3: "deger3",
    deger4: "deger4",
    deger5: {
        isim: "Hamit"
    },
    deger6: {
        isim6: "Hamit"
    },
}
const { deger5: { isim } } = degerler3;
console.log(isim);

const { deger6: { isim6: name } } = degerler3; // değişken adını değiştirmek istediğimizde
//console.log(isim6); // hata verir. Değişkenin yeni adı name
console.log(name);
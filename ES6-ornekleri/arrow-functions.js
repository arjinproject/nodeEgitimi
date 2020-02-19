"use strict";  //Son sürüme göre derleme yapmak istiyorsak bunu kullanıyoruz
//@ts-check   // syntax hataları görünsün diye bunu kullanıyoruz.

// fonksiyon kısaltması yapılacak

const myFunction = function () {
    return 1;
}

console.log(myFunction());

// aşağıdaki şekilde kısaca fonksiyon tanımlanabilir

const myFunction2 = (yas, sayi2) => {
    return yas + sayi2;
}

console.log(myFunction2(12, 8));

// sadece return işlemi olan bir fonksiyon daha kısa şekilde de yazılabilir.
// tek parametre varsa onu parantez içine almak gerekmiyor.

const myFunction3 = yas => yas*4;

console.log(myFunction3(34));
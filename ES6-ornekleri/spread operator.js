"use strict";  //Son sürüme göre derleme yapmak istiyorsak bunu kullanıyoruz
//@ts-check   // syntax hataları görünsün diye bunu kullanıyoruz.

const arra = ["bir", "iki", "üç"];
console.log(...arra);  // oluşturulmuş arrayin tüm elemanlarını yazdırmak.

const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5, 6];
console.log(array2);// çıktı  [ 1, 2, 3, 4, 5, 6 ]

const arra3 = [1, 2, 3, 4, 5, 6];
const [deger1, deger2, ...array5] = arra3;
console.log(array5); // bir dizinin belli bölümünü başka bir dizi yaptık
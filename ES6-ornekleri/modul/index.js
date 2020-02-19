"use strict";  //Son sürüme göre derleme yapmak istiyorsak bunu kullanıyoruz
//@ts-check   // syntax hataları görünsün diye bunu kullanıyoruz.


const square = require('./modul').square;
var diag = require('./modul').diag;
console.log(square(11)); // 121
console.log(diag(4, 3)); // 5
//@ts-check
/*eslint no-unused-vars: ["error", { "ignoreRestSiblings": true }]*/

var data = 23;
var degiskenler = "23";
if (data > 22) {
    console.log(degiskenler);
}


console.log(data + " " + degiskenler);

console.log(data == 23); // true
console.log(data == "23"); // true
console.log(data === "23"); // false -- hem tür hem değer aynı mı diye bakar
console.log(data !== "23"); // true -- hem türü hem değeri farklı mı. Bir tane bile aynı ise true olur


var durum = console.log(1 < 4 && 4 < 3); // ve operatörü - false
var durum2 = console.log(1 < 4 || 4 < 3); // veya operatörü - true

var acMisin = true;

if (acMisin) {
    console.log("Evet açım");
}

// @ts-ignore
if (durum) {
    console.log("Evet açım");
} else {
    console.log("Aç değilim");
}

if (durum2) {
    console.log("Evet açım");
} else if (durum) {
console.log("Sana ne");
} else {
    console.log("Aç değilim");
}


function topla (a, b) {
    console.log(a + b);
}

topla(2,4);
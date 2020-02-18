
var insan = {}  // nesne tanımlama 1
insan.yas = 12;
insan.isim= "Hamit";
insan.yuru = function () {
    console.log("Yürüyor...");
}


console.log(insan.yas);
insan.yuru();
console.log(insan);

var insan2 = { // nesne tanımlama 2..
yas : 12,
isim : "Hamit",
yuru : function () {
    console.log("Yürüyor...");
} };

console.log(insan2 );
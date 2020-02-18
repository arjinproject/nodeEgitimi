// es6 da artık değişkenleri let ile tanımlıyoruz
//@ts-check

var data = "Değişken";
let data2 = "Bu da değişken";

for (let index = 0; index < 10; index++) {


}

// console.log(index); // index kullanılamıyor. Çünkü bu for un değişkeni ve let ile tanımlanmış

for (var index2 = 0; index2 < 10; index2++) {


}

console.log(index2); // index2 kullanılabilir. Çünkü var ile tanımlanmış

var x = "Selam1";
var x = "Selam2";
console.log(x);  // görüldüğü gibi aynı değişken tekrar tanımlanabiliyor

let y = "Selam1";
//let y ="Selam2";  // bu satır hata veriyor. Çünkü daha önce oluşturulmuş
y = "Selam3";
console.log(y);

/**
 * const: Eğer oluşturulan değişken bir daha değiştirilemeyecekse const ile tanımlanır
 */

const z = "Selam";
// z = "Selam2";  // bu satır hata verir çünkü const ile oluşturulmuş bir değişken daha sonra değiştirilemez

const degerler = [1,2,3,4,5];
degerler.push(3);
console.log(degerler);  // görüldüğü gibi const ile oluşturulan degerler dizisine değer eklenebiliyor ama değiştirme yapılamaz.
degerler[2]=13;
//degerler = "Selam"; Bu ve bir alt satır hata verir. Çünkü degerler değişkeni yeniden tanımlanamaz
//degerler = [2,3,4,5,6];

degerler[2]=14; // Ama değer eklenebilir değiştirilebilir.
console.log(degerler);
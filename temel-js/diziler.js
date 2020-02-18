var dizi=["Merhmet", 28];

console.log(dizi);  // tüm elemanlar yazdırılıyor

console.log(dizi[0]);  // o. indexteki elemanı yazdırır

for (var i = 0; i<dizi.length; i++){
    console.log(dizi[i]);
}

console.log("For each kısmı başlıyor");

dizi.forEach(function (k)  {
    console.log(k);
});
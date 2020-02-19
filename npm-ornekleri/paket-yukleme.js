/**
 * npm installer ile kurduğumuz tüm modüller node_moduler klasörü altına gelir.
 * slugify paketini kullanacağız.
 * Bu paket boşluk olan yerlere istediğimiz karakteri koymamızı sağlıyor.
 * örneğin bir url yapısındaki boşlukların yenine tire koyma gibi. Örnek:
 * http://birmuhendis.net/python/cozuldu-valueerror-expected-2d-array-got-scalar-array-instead/
 *  */

const slugify = require('slugify');

const text = "Ben yoruldum hayat gelme üstüme";

const slug = slugify(text) // default olarak "-" kullanıyor aralarda
console.log(slug);  // Ben-yoruldum-hayat-gelme-ustume

const slug2 = slugify(text, "*");
console.log(slug2);

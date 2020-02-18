// 0'a bölünme hatası gibi istisnalar.

/**
 * throw
 * thy
 * catch
 * finally
 */

 var isim = "Merhmet";

//  if (isim != "Mehmet")
//      throw Error ("beklenmeyen isim");  // bu hatadan sonra program devam etmiyor.
 

//  console.log(isim);


try {
    var sayi1=4;
    var sayi2=0;
    var sonuc=sayi1/sayi2
    console.log(sonuc);
} catch (error) {
    console.log(error);
} finally{
    // hata ortaya çıksa bile bu kısımın çalışmasını istersek finally kullanırız
    console.log("Burası finally bloğudur");
}
//@ts-check

// bir fonksiyona başka fonksiyonu paratme vermek

function soyle(text) {
    console.log(text);
}

function caydemle() {
    console.log("Çay demleniyor...");
}

soyle("Selam");
caydemle();  
/* javascrit te bu satırın çalışması için üst satırın işleminin bitmesi gerekmiyor.
Eğer sırayla çalışmasını istiyorsan callback fonksiyona ihtiyaç duyarım.
Aşağıdaki şekilde bir kullanım ile soyle() fonksiyonu bitmeden caydemle() fonksiyonu çalışmaz
*/

function soyle1(text, callback) {
    console.log(text);
    callback();
}

function cayDemle() {
    console.log("Çay demleniyor...");
}

soyle1("Selam", cayDemle);
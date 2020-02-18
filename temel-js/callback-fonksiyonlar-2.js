//@ts-check

// bir fonksiyona başka fonksiyonu paratme vermek
// yazdığımız fonksiyonarı çalışma sırasına koymak için callback kulanılır

function birinci(callback) {
    setTimeout(() => {
        console.log("Birinci");
        callback(ucuncu);
    }, 1000);
}

function ikinci(callback) {
    setTimeout(() => {
        console.log("İkinci");
        callback();
    }, 2000);

}

function ucuncu() {
    console.log("Üçüncü");
}

birinci(ikinci);
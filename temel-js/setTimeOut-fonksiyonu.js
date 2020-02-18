setTimeout(function() {
    console.log("Selam nasılsın");
}, 3000);  // 3 saniye sonra yukarıdaki fontsiyon çalışmaya başlar


// Aşağıdaki şekilde bir kullanım da yapılabilir

var func = function() {
    console.log("Selam nasılsın Canım");
}
setTimeout(func, 1000);  // 1 saniye sonra yukarıdaki fontsiyon çalışmaya başlar


var x = "x değişkeni"

function testFunk() {
    var x = "testFunk x değişkeni"
    console.log(x);
}

testFunk(); // fonksiyon içindeki x i görür
console.log(x);  // dışarıdaki x i görür


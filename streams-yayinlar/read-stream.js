const fs = require("fs");


filename = __dirname + '/video.mp4';
const video = filename;
const readStream = fs.createReadStream(video);
let progress = 0;

fs.stat(video, (err,data)=>{
const total=data.size;
readStream.on('data', (chunk) => {
    //console.log("Bir veri geldi"); // her bir chunk (parçacık) okunduğunda bu yazılır
    //console.log(chunk.length); // okunan parçacık yazılır ekrana
    progress+=chunk.length;
    
    console.log(Math.round((100*progress)/total)+" %");
});
readStream.on("end", () => {
    console.log("Veri okuma bitti");
    console.log(progress + " bytes okundu");
});
})


"use strict";  //Son sürüme göre derleme yapmak istiyorsak bunu kullanıyoruz
//@ts-check   // syntax hataları görünsün diye bunu kullanıyoruz.

// bir paketi global kurmak için nmp install -g slugify kotutunu kullanırız

/**
 * kurulu global paketler
 * npm list -g 
 * npm list -g --depth=0
 * 
 */

const slugify=require("slugify");
console.log(slugify("Selam nasılsın"));


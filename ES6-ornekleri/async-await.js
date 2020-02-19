"use strict";  //Son sürüme göre derleme yapmak istiyorsak bunu kullanıyoruz
//@ts-check   // syntax hataları görünsün diye bunu kullanıyoruz.

const user = { id: 12, name: "Hamit", surname: "Seyrek" }
const friends = [{ id: 13, name: "Yılmaz", surname: "Gökçe" }, { id: 14, name: "Yusuf", surname: "Özen" }];

// bu datalar web servisten geliyormuş gibi kullanacağız


// bu bir https servis
const getUser = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(user);
        }, 500);
    });
};

// bu bir https servis 
const getFriens = (userId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(friends);
        }, 1000);
    });
};

// burada önce user çağrılır sonra friends. 
//Sırayla çağırabilmek (Asenkrron) için üç yöntem kullanacağız.


// callback hell
let userId;
getUser()
    .then(function (user) {
        userId = user.id;
        getFriens(userId).then(function (friends) {
            console.log(user);
            console.log(friends);
        });
    })

// promise chain

getUser()
    .then((user) => {
        return getFriens(userId);
    })
    .then((friends) => {
        console.log(friends);
    });

// async-await yapısı

async function asenkronAkis() {
    const user = await getUser();
    const friends = await getFriens(user.id); // bu satırın çalışabilmesi için üst satır bitmelidir
    console.log("************");
    console.log(friends);
    console.log("************");
};

asenkronAkis();

// async-await yapısı

async function asenkronAkis2() {
    try {
        const user = await getUser();
        const friends = await getFriens(user.id); // bu satırın çalışabilmesi için üst satır bitmelidir
        console.log("+++++++++++++++++");
        console.log(friends);
        console.log("+++++++++++++++++");
    } catch (error) {
console.log(error);
    }
// getuser veya getfriends te reject olsaydı catch kısmı çalışacaktı
};

asenkronAkis2();
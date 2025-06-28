// Soal 5. Bintang asteriks
//js
// Problem buatlah bintang seperti berikut

let input = 5;

for (let i = 1; i <= input; i++) {
    let kosong = "";
    for (let j = 1; j <= i; j++) {
        kosong += '*'
    }
    console.log(kosong)
}


//hasilnya
//*
//**
//***
//****
//*****
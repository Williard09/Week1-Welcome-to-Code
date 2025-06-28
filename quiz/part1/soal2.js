//Soal 2
// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. 
// Disini kamu diminta untuk membuat format tanggal. 
// Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. 
// Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

let tanggal = 3; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = 12; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2001; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

if (tanggal < 1 || tanggal > 31) {
    console.log("Isi tanggalnya sesuai dengan kalender")
}
else if (bulan < 1 || bulan > 12) {
    console.log("Isi bulannya dengan benar!")
}
else if (tahun < 1900 || tanggal > 2200 ) {
    console.log("Isi Tahunnya dengan benar!")
}
else if (bulan === 2 && tanggal > 29 && !(tahun % 4 === 0 && (tahun % 100 !== 0 || tahun % 400 === 0)))  {
    console.log("Bulan Febuari tidak melebihi 29 dan ada tahun kabisat(jika ada)")
}
else if ((bulan === 4 || bulan === 6 || bulan === 9 || bulan === 11) && tanggal > 30) {
    console.log("Bulan Bulan ini tidak valid")
}
else {
    switch (bulan){
        case 1:
            console.log(`sekarang tanggal ${tanggal} Januari ${tahun}`);
            break;
        case 2:
            console.log(`sekarang tanggal ${tanggal} Febuari ${tahun}`);
            break;
        case 3:
            console.log(`sekarang tanggal ${tanggal} Maret ${tahun}`);
            break;
        case 4:
            console.log(`sekarang tanggal ${tanggal} April ${tahun}`);
            break;
        case 5:
            console.log(`sekarang tanggal ${tanggal} Mei ${tahun}`);
            break;
        case 6:
            console.log(`sekarang tanggal ${tanggal} Juni ${tahun}`);
            break;
        case 7:
            console.log(`sekarang tanggal ${tanggal} Juli ${tahun}`);
            break;
        case 8:
            console.log(`sekarang tanggal ${tanggal} Agustus ${tahun}`);
            break;
        case 9:
            console.log(`sekarang tanggal ${tanggal} September ${tahun}`);
            break;
        case 10:
            console.log(`sekarang tanggal ${tanggal} Oktober ${tahun}`);
            break;
        case 11:
            console.log(`sekarang tanggal ${tanggal} November ${tahun}`);
            break;
        case 12:
            console.log(`sekarang tanggal ${tanggal} Desember ${tahun}`);
            break;
    } 
}
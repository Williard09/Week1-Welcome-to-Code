// Soal 4
//js
//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {
    // you can only write your code here!

    let banyakX = 0;
    let banyakO = 0;

    for(i = 0; i < str.length; i++) {
        if (str[i] === `x`) {
            banyakX++;
        }
        else if (str[i] === `o`) {
            banyakO++;
        }
    }
    if (banyakX === banyakO) {
            return true;
        }
    else {
        return false;
    }
}
  
// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
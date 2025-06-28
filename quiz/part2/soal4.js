//Soal 4. Breaking Sentence (yet Again) and Count Each Length
//js
// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 3);
let exampleSecWord4 = word4.substring(4, 14);
let exampleThiWord4 = word4.substring(15, 17);
let exampleFouWord4 = word4.substring(18, 20);
let exampleFifWord4 = word4.substring(21, 25);

let firstWordLength = exampleFirstWord4.length;
let SecondWordLength = exampleSecWord4.length;
let ThirdWordLength = exampleThiWord4.length;
let FourthWordLength = exampleFouWord4.length;
let FifthWordLength = exampleFifWord4.length;

console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + exampleSecWord4 + ', with length: ' + SecondWordLength);
console.log('Third Word: ' + exampleThiWord4 + ', with length: ' + ThirdWordLength);
console.log('Fourth Word: ' + exampleFouWord4 + ', with length: ' + FourthWordLength);
console.log('Fifth Word: ' + exampleFifWord4 + ', with length: ' + FifthWordLength);
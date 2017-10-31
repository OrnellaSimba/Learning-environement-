// var x = Math.min(7, 5, -12, 6, 32, 18, 14, -2 );
// console.log(x);
//
// var y = Math.max(-3, 9, 21, 36, 27, 54, 17, 35);
// console.log(y);
//
// var somme= (y+x);
// console.log(somme);
//
// var floatBateau = 10.4;
// console.log (floatBateau);
//
// var couleBateau= Math.floor(floatBateau);
// console.log(couleBateau);
//
// var volebateau= Math.ceil(floatBateau);
// console.log(volebateau);
//
// function getRandomIntInclusive(min, max){
//   min = Math.ceil(min);
//   max = Math.floor (max);
//   rand = Math.random()*(max - min +1);
//   rand = Math.floor(rand) + min;
//   return rand;
// }
//
// console.log(getRandomIntInclusive(50,100));

var montableau=["Goro", "Johnny Cago", "Kano", "Liu Kano", "Raiden", "Reptil", "Scorpion", "Shang Tsun", "Sonya", "Sub-Zero"];
var longueurtableau= montableau.length;
var index= Math.random()*(longueurtableau-0);
var index= Math.floor(index)+0;
console.log (index);
console.log (montableau[index]);

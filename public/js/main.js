// // 1
// let cook = " "
// let tabExo = ["coding", cook,  4,  15, true];
// console.log(tabExo);
// //2
// console.log(tabExo.length );
// //3
// tabExo.pop();
// console.log(tabExo);
// //4
// tabExo.shift();
// console.log(tabExo);
// //5
// tabExo.splice(3, 0, "kevin", true );
// console.log(tabExo);
// //6
// tabExo.unshift("log", 50 );
// console.log(tabExo);
// //7
// tabExo.reverse()
// console.log(tabExo);
//8
let elias =[];
let x = prompt("boite");
let y = prompt("boite");
elias.unshift(x);
elias.push(y);
alert(elias);
console.log(elias);
let z = prompt("boite");
elias.unshift(z);
alert(elias);
let a  = prompt("boite");
let b = prompt("boite");
let c = prompt("boite");
elias.unshift(a, b, c);
alert(elias);
console.log(elias);
// let elais2 = elias.splice(3, elias.length-3);
// alert(elais2);
// console.log(elais2);
elias.splice(0,3 , "b");

alert(elias)
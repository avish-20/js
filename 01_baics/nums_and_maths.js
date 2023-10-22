"use strict"
const score = 400
const balance = new Number(100)
console.log(score);
console.log(balance);

console.log(balance.toString());

console.log(balance.toFixed(2));

const ap = 123.8977
console.log(ap.toPrecision(3)); //123.555 - 124    23.444 - 23.3

const hundreds = 100000000
console.log(hundreds.toLocaleString('en-IN'));

//*****maths */

console.log(Math.abs(-2));
console.log(Math.round(5.6));
console.log(Math.floor());
//random

console.log(Math.random());
console.log((Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min);
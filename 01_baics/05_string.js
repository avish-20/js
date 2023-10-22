"use strict"
const name = "avish saini"
const repoCount = 50

console.log(name + repoCount);//bad way
console.log(`My name is ${name} ans my repo count is ${repoCount}`);
const gameName = new String("avish")
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.indexOf('t'));
console.log(gameName.charAt(2));

const another = gameName.slice(-4,4);
const newstr = "hitesh     "
console.log(newstr.trim())

const url = "https://hitesh.com/hitesh%20chhs"
console.log(url.replace('%20','-'))

console.log(gameName.split(' '));
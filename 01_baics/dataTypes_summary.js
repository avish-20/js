"use strict"
//primitive datatype
// 7 types: string, number, null, bool, undefined, Symbo, BigInt
//Refrance type(Non primitive)
//Array, Objects, Functions
//dynamically typed
const id = Symbol("123")
const id1 = Symbol("123")
console.log(id === id1);// output is false
const heros = ["shaktiman", "nagraj", "doga"]
let myObject = {
    name:"avish",
    age:22
}

const myFun = function(){
 
}
//stack (primitive), Heap(Non-primitive)
let myYoutubename = "avish"
let anotherName = myYoutubename // it gets copy not the referance

anotherName = "saini"
console.log(myYoutubename) // avish
console.log(anotherName) //saini

let user1 = {
    email:"avish@gmail.com",
    upi:"nnicn"
}
let user2 = user1
user2.email = "saini@gmail.com"

console.log(user1);
console.log(user2);






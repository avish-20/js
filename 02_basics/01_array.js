//array
"use strict"
const myArr = [0,1,2,3,4,5]
const myHeros = ["shaktiman", "naag"]
console.log(myArr[1]);

//Array Methods
myArr.unshift(9);// insert element at the start
myArr.shift();//remove element
// myArr.push(6)
// myArr.push(8);
console.log(myArr);

const newArr = myArr.join()
//convert array into string
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

//slice, splice

console.log("A", myArr);
const a1 = myArr.slice(1,3);
console.log(a1);
console.log("B",myArr);
const a2 = myArr.splice(1,3);
console.log("C", myArr);
console.log(a2);
//splice modify the original array



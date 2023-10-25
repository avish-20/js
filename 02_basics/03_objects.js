//singleton

//object literals
// Object.create() - this is singleton method

const jsUser = {
    name:"avish",
    "full_name":"avish Saini"//now can't be accedsed by .
    ,
    age:22,
    location:"ghz",
    email:"abc@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

console.log(jsUser["email"]);
console.log(jsUser["full_name"]);

jsUser.greeting = function(){
    console.log("hello js users");
}
console.log(jsUser.greeting());




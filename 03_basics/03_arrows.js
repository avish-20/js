const user ={
    name:"avish",
    age:22,

    welcomeMessage: function(){
        console.log(`${this.name}, welcome to website`);
        console.log(this);
    }
    //his refers to current context
    

}
// user.welcomeMessage()
// user.name = "sAINI"
// user.welcomeMessage()
// console.log(this);

// function chai(){
//     //let uername = "avish"
//     console.log(this);
// }
const chai = ()=>{
    console.log(this);
}
const add= (num1,num2)=> (num1+num2)//implicit return 
chai()

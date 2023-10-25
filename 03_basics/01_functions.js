function sayMyname(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
}

sayMyname()

function addTwoNumbers(number1, number2){
    console.log(number1+number2);
}

addTwoNumbers(2,3)

function calculateCartPrice(...num1){//rest - jo mujhe mil rha h vo bhut khukle me mil rha h use ek bundle me pack kro
    return num1
}

console.log(calculateCartPrice(200,30,400));

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} ans price is ${anyobject.price}`);

}
const user = {
    username:"avish",
    price:1999
}
handleObject(user);


let a = 10
const b = 20
{
    //scope this curly braces 
}
console.log(addOne(4));//no error
function addOne(num){
    return num+1
}
console.log(addTwo(4));//error
const addTwo = function(num){
    return num+2;
}
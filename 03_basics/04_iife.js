//immediately invoked function

//but sometimes global scope se cheeze pollute hoti h tb iska kam aata h

(function chai(){
    console.log(`DB@ connected`);
})(); //we can also pass parameters in this
function chai(){
    console.log(`DB connected`)
}
chai()

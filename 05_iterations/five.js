//for each loop
const coding = ["js", "c++", "python", "ruby"];

coding.forEach(function (item){
    console.log(item);
})

coding.forEach((item)=>{
    console.log(item);
})

coding.forEach( (item, index, arr) =>{
    console.log(item,index, arr);
})
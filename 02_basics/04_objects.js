const tinderUser ={

}
tinderUser.id = "12344"
tinderUser.isLoggedIn = false

const regularUser ={
    email: "abc@gmail.com"
    ,fullname: {
        userfullname:{
            fisrtname:"hitesh"
            ,lastname:"saini"
        }
    }
}
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c",4:"d"}
//const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}
console.log(obj3);

const course = {
    cousername:"js in  hindi",
    price:"999",
    courseInstructor:"hitesh"
}
//
const {courseInstructor:instructor} = course

console.log(instructor);

const navbar = ()=>{

}

// {
//     name:"avish",
//     price:"999",
//     coursename: "js in hindi"
// }

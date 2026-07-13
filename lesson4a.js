// Arrow functions
// This is a function that was introduced in the ECMA script 6 that they give us the latest/ mordern way of defining in a compact manner.
//At times the arrow functions can be an annonymous function why? Because the use of the name of the variables are contained in
//example

const sayHello = () =>{
    console.log("this is an arrow function.")
}

sayHello()
console.log("=================================")
//creat for a function arrow

const myBio = () =>{
    console.log("my height is 5.7 feet")
}

myBio()
console.log("================================================")
// below is an example 

const product = () =>{
    let a = 45
    let b = 10
    let c = 16

    let answer = a * b * c 
    console.log("the product of the numbers is :", answer)
}
product()
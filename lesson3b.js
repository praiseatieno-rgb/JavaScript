// Javascript function
//a function is a block of code that involves, the perfomance of the program
//the structure is as follows;
// function keyword, name of the function, parenthesis and the body of the function

function sayHello(){
    console.log("Hello there. Hope you are doing fine")
}

//below we invoke our function
sayHello()


for(let i = 1; i<= 3000;i++){
console.log(i)
sayHello()
}
console.log("=====================================")
//below is a function to add two numbers
function addition(){
    let number1 = 10
    let number2 = 30

    let sum = number1 + number2
    console.log("the sum of the number is", sum)
}
//invoke it
addition()
console.log("=======================================")

//simple rate gained p = 50000, r = 7% and t = 8 years. formular is (p * r *t)/100
function intrest(){
    let p = 50000
    let r = 7 
    let t = 8

    let intrest = (p * r * t)/ 100
    console.log("yhe simple intrest is", intrest)
}

intrest()
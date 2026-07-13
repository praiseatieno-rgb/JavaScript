//JS functions with parameters
//parameters are values that get passed as arguments when calling a functions
//they help us to create functions that can be reusable through out a program...
// they appear inside of the brackets of the functions.

function greeting(name){
    console.log("Hello", name, "How have you been?")
}

//from the above example, greeting is the name of the function. inside of the parenthisis, we have "name" as the parameter

greeting("joseph")
greeting("margret Lucy")

console.log("=========================================")
// below is a func that is able to find the product of the three numbers
function multipication(number1,number2,number3){
    let product = number1* number2 * number3
    console.log("the product of the number is:", product)
}

multipication(10, 5, 6)
multipication(12, 6, 7)

console.log("==========================================")
//area of a triangle b = 20cm height = 12cm

function triangle(b , h){
    let area = 0.5 * b * h 
    console.log("the area of the triangle is:", area)
}

triangle(20, 12)

console.log("============================================")
// Given the speed is 180 and the distance covered as 80km, create a function to find the time taken by a vehicle moving from point A to B 
function timetaken(d, s){
    let tt = d/s
    let ttInMinutes = tt* 60
    console.log("the time taken in hours is:", ttInMinutes,"minites")
}

timetaken(80, 180)

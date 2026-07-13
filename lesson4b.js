//arrow functions with parameters

const greet = (name) =>{
    console.log("Hello " + name + " how have you been? I trust you are good....")
}

greet("James Otieno")
greet("Mary Joseph")
console.log("===============================================")
// create an arrow function with parameters 

const signin = (email) =>{
    console.log("sign at " + email + " is succsesfull!!")
}

signin("praiseatie71@gmail.com")
console.log("=====================================")

//example 3

const CircleArea = (pi, radious) =>{
    let area = pi * radious * radious
    console.log("the area of the circle is", area,"cm2")
}

CircleArea(3.142, 7)
CircleArea(22/7, 35)

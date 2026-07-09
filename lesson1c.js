//js Object data type
// an object is a data type that stores data in term of key

let person = {
    name : " James Atieno",
    age : 54 , 
    isregistered : true
};

console.log("  The details of the person is:", person)

// To access the items of an object, we can have 2 methods is
//method 1 : by the use of the square brackets
console.log(person["name"])
console.log("Age")

// method two : buy the use of a dot seperater
console.log(person.isregistered)

// js Array data type
//an array reffers to a collection of item  that are organised into indexes
let fruits = ['Banana', "Apple", "Mango", "Melon", "Pineapple", "Grapes" ]
console.log(fruits)

// to access the item of an array, we use the idex
console.log(fruits[3])
console.log(fruits[5])

console.log(fruits.slice(2, 5))
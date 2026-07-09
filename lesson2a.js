//Comparison operators
//they usually evaluate to a boolean(true or false). They are used for comparing two or more values

let number1 = 5
let number2 = 10

console.log(number1 > number2)
console.log(number1 == number2)
console.log(number1 < number2)
console.log(number1>= number2)
console.log(number1 <= number2)
console.log(number1 != number2)
console.log(number1 === number2)//strick equal to - exaluate both the data type and the value
console.log(number1 !== number2)

//logical operators
//they are used in evaluating multiple conditions and they also return a boolean
//logical and (&&)
//It evaluates to true only if both of the conditions are true
console.log((number1< number2)&& (number2> number1))

//logical or (||)
// it evaluates to true if one of the connection/statement is true
console.log((6>3)||(3>8))

//logical not (!)
//it negates a statement/reverses a condition
console.log(!(4 < 5))
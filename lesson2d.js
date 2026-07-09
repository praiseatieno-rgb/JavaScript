// Javascript for loop
// loops are used to iterate through something untill a condition is met
// structure of the loop
//1. for keyword followed by the parenthesis
//2. the initializition; set a condition; increment/decrement
//3. body of the loop (statement to be printed out.)

for(i = 0; i <= 10; i++){
    console.log("the new value of i is:", i)
}
//(assignment) create a program by use of the for loop that prints out the leap years in between 2000 and 2030

for(let year = 2000; year <= 2030; year++){
    if((year % 4===0 && year % 100 !== 0)
    ||(year % 400 === 0)){
console.log(year)
}
}
//if... else if... else condition statement
// this condition statement is used in evaluating multiple conditions and if a condition is met the executoin for the programs stops

let age = 20

if (age <15){
    console.log(" You are too young to watch this episode")
}
else if(age >= 15 && age <= 18){
    console.log(" You can watch this episode under parental guidance")
}
else if(age > 18 && age < 40){
    console.log("Have a seat and enjoy the episode ")
}
else{
    console.log("This episode is not for you")
}

console.log("=======================================")

// assignment, come up with your own conditional statement
let height = 4.8

if (height <4.9){
    console.log("sorry you do not qualify")
}
else if(height >= 5.3 && height <= 5.5){
    console.log(" guard position is available")
}
else if(height > 5.6 && height < 5.8){
    console.log("foward position is available ")
}
else{
    console.log("the big man position is available")
}
// do the assignment on page 27 of the book 5

// the distance travelled
let distance = 10
let amount;

// Determine the amount to pay
if (distance >= 0 && distance <= 100) {
    amount = 5;
} else if (distance >= 101 && distance <= 500) {
    amount = 10;
} else if (distance >= 501 && distance <= 1000) {
    amount = 20;
} else if (distance >= 1001) {
    amount = 40;
} else {
    console.log("Invalid distance entered.");
}

// Display the result
if (distance >= 0) {
    console.log("Distance Travelled: " + distance);
    console.log("Amount to Pay: $" + amount);
}
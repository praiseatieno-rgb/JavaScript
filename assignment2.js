// do the assignment on page 27 of the book 5

// the distance travelled
let distance = 550
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
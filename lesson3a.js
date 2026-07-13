// While loop
// this is another type of a loop in js used for iteraction purpose.
//the syntax of the while loop is given as :
//1. Initializing a variable
//2. while keyboard
//3. condition to be checked
//4. body of the while loop
//5. increment /decrement

let i = 0

while (i <= 10){
    console.log("the new value of i is:", i)
    i++
}

console.log('===========================================')
let x = 20

while(x <= 200){
    console.log("x is", x)
    x+=2
}

console.log( '============================================' )
//create a program that finds aall ood numbers from 150 to 74
let n = 150

while (n >= 74){
    if(n % 2 !==0){
        console.log("the odd number are", n);
    }
    n --;
}

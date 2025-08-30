const prompt = require('prompt-sync')();

// to check if a code is even or odd
/*
// const prompt = require('prompt-sync')();

let num1 = prompt("Enter num1: ");

if(num1 % 2 == 0){
    console.log("the num is even")

}
else{
    console.log("the num is odd")
}
*/
// square
/*
function sqr(a){
    return a*a;
}

let num1 = prompt("Enter num1: ")

console.log(`the square of ${num1} is ${sqr(num1)}`)
*/

/*
function Calculator(a,b,operator){
    switch (operator) {
        case '+':
            return a + b;
            break;
        case '-':
            return a - b;
            break;
        case '*':
            return a * b;
            break;
        case '/':
            if(b == 0){
                console.log("Error: Division by zero is not allowed");
                return;
            }
            return a / b;
            break;
        default:
            confirm("Error: Invalid operator. Supported operators are +, -, *, /, %, ^, log");
            break;
    }
}

let num1 = parseFloat(prompt("Enter num1: "));
let num2 = parseFloat(prompt("Enter num2: "));
let operator = prompt("Enter operator (+, -, *, /): ");
console.log(`The result is ${Calculator(num1, num2, operator)}`);
*/

// factorial function
/*
function fact(a){
    if(a == 1 || a == 0){
        return 1;
    }
    return a * fact(a - 1);
}

let num = prompt("Enter num for factorial: ")
console.log(`The Factorial of ${num} is ${fact(num)}`)
*/

// isPrime(n)

function isPrime(n){
    if(n <= 1) return false;

    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i == 0){
            return false;
        }
        
    }

    return true;
}

let num = parseInt(prompt("Enter number to check: "))
if(isPrime(num)){
    console.log(`The number ${num} is prime`)

}
else{
    console.log(`The number ${num} is not prime number`)
}
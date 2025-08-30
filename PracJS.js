function add(a,b) {
    return a + b;
}
function sub(a,b) {
    return a - b;
}
function mul(a,b) {
    return a * b;
}
function div(a,b) {
    return a / b;
}
function Calculator(a,b){
    console.log("The sum of",a," and ",b," is ",add(a,b));
    console.log("The sub of",a," and ",b," is ",sub(a,b));
    console.log("The mul of",a," and ",b," is ",mul(a,b));
    console.log("The div of",a," and ",b," is ",div(a,b));
}
Calculator(4,5);
console.log("\n")
Calculator(4,90);
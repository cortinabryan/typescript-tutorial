function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result:' + num);
}
console.log(printResult(add(5, 12)));
printResult(add(5, 12));
var combineValues;
// Combine values except any function that takes 2 paramenters for each parameter is a number and then returns a number;
combineValues = add;
// combineValues = printResult;
console.log(combineValues(8, 8));
// let someValue: undefined;

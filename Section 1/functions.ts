// function add(n1: number, n2: number){
//     return n1 + n2;
// }

// function printResult(num: number): void {
//     console.log('Result:' + num);
// }

// console.log(printResult(add(5,12)));

// function addAndHandle(n1:number, n2:number, cb: (num:number) => void ) {
//     const result = n1 + n2;
//     cb(result);
// }
// // The cb doesnt force you to return anything. it just tells you anything you might return will not be used
// //  callback functions can return something, even if the argument on which they're passed does NOT expect a returned value.

// printResult(add(5,12));

// let combineValues: (a:number, b:number) => number;
// // You can be more specific.

// // let combineValues: Function;
// // Makes it clear - Everything that we store here is a function

// // let combineValues: (a:number, b: number) => number; 
// // Combine values except any function that takes 2 paramenters for each parameter is a number and then returns a number;

// combineValues = add;
// // combineValues = printResult;
// // combineValues = printResult;

// console.log('Your Answer')
// console.log(combineValues(8,8));

// // let someValue: undefined;

// addAndHandle(10,20,(result) => {
//     console.log(result);
// });
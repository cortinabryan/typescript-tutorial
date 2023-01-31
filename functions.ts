function add(n1: number, n2: number){
    return n1 + n2;
}

function printResult(num: number): void {
    console.log('Result:' + num);
}

console.log(printResult(add(5,12)));

function addAndHandle(n1:number, n2:number, cb) {
    const result = n1 + n2;
}

printResult(add(5,12));

let combineValues: (a:number, b:number) => number;
// You can be more specific.

// let combineValues: Function;
// Makes it clear - Everything that we store here is a function

// let combineValues: (a:number, b: number) => number; 
// Combine values except any function that takes 2 paramenters for each parameter is a number and then returns a number;

combineValues = add;
// combineValues = printResult;
// combineValues = printResult;

console.log('Your Answer')
console.log(combineValues(8,8));

// let someValue: undefined;
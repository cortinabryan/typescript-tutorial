"use strict";
// console.log("hi test! AYOOOO YOOYOYOYOYO");
// const randomString: string = "yoo whatsup bruhh";
// const randomNum: number = 44;
// const randomBool: boolean = true;
// function whatsup(x: string | number | boolean) {
//   if (typeof x === "string") {
//     return x.split("");
//   } else {
//     return x;
//   }
// }
// console.log(whatsup(randomString));
// console.log(whatsup(randomNum));
// console.log(whatsup(randomBool));
////////////////////////////////////////////////////////////
// Arrow Functions
// const add = (x: number, y: number) => x + y;
// console.log(add(4, 9));
// const printOutput: (a: number | string) => void = (output) =>
//   console.log(output);
// const button = document.querySelector("button");
// if (button) {
//   button.addEventListener("click", () => {});
// }
// printOutput(add(3));
// Default Function Parameters
// const add = (x: number, y: number = 1) => x + y;
// console.log(add(4, 9));
// const printOutput: (a: number | string) => void = (output) =>
//   console.log(output);
// const button = document.querySelector("button");
// if (button) {
//   button.addEventListener("click", () => {});
// }
// printOutput(add(3));
// Spread Operator (...)
// const add = (x: number, y: number = 1) => x + y;
// console.log(add(4, 9));
// const printOutput: (a: number | string) => void = (output) =>
//   console.log(output);
// const button = document.querySelector("button");
// if (button) {
//   button.addEventListener("click", () => {});
// }
// printOutput(add(3));
// const hobbies = ["Code", "Dota"];
// const activeHobbies = ["Jiu-Jitsu", ...hobbies];
// // activeHobbies.push(...hobbies);
// console.log(activeHobbies);
// const person = {
//   name: "Buddhalucious",
//   age: 1000,
// };
// const copiedPerson = { ...person }; // To create the perfect copy
// const copiedPerson2 = person;
// console.log(copiedPerson);
// console.log(copiedPerson2);
// Rest Parameters
// const add = (x: number, y: number = 1) => x + y;
// console.log(add(4, 9));
// const printOutput: (a: number | string) => void = (output) =>
//   console.log(output);
// const button = document.querySelector("button");
// if (button) {
//   button.addEventListener("click", () => {});
// }
// printOutput(add(3));
const hobbies = ["Code", "Dota"];
const activeHobbies = ["Jiu-Jitsu", ...hobbies];
// activeHobbies.push(...hobbies);
console.log(activeHobbies);
const person = {
    name: "Buddhalucious",
    age: 1000,
};
const copiedPerson = Object.assign({}, person); // To create the perfect copy
const copiedPerson2 = person;
console.log(copiedPerson);
const add = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addedNumbers = add(5, 10, 4, 2, 5);
console.log(addedNumbers);

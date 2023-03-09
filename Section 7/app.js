"use strict";
// const names: Array<string> = []; // string[]
// // names[0].split("");
// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("DONE MOFO!");
//   }, 2000);
// });
// promise.then((data) => {
//   data.split("");
// });
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: "Topson", hobbies: ["Pro Dota"] }, {
    age: 24,
});
const mergedObj2 = merge({ name: "Nisha", hobbies: ["Pro Dota"] }, {
    age: 22,
});
function countAndDescribe(element) {
    let descriptionText = "Got no value";
    if (element.length === 1) {
        descriptionText = "Got " + element.length + " elements";
    }
    else if (element.length > 1) {
        descriptionText = "Got " + element.length + " elements";
    }
    return [element, descriptionText];
}
console.log(mergedObj);
console.log(mergedObj2);
console.log(countAndDescribe("YELLowwww"));
console.log(countAndDescribe(["Dota", "Long walks to the refrigerator"]));
// The "keyof" Constraint
function extractAndConvert(obj, key) {
    return "value " + obj[key];
}
console.log(extractAndConvert({ name: "Abed" }, "name"));

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
// Generic Classes
class DataStorage {
    constructor() {
        this.data = [];
    }
    // private data: string | number | boolean[] = [];
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("Coffee");
textStorage.addItem("Milk");
textStorage.removeItem("Milk");
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
const names = ["Topson", "Ceb"];
// names.push("JerAx");

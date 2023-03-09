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

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Topson", hobbies: ["Pro Dota"] }, {
  age: 24,
} as {
  name: string;
  age: number;
});

const mergedObj2 = merge({ name: "Nisha", hobbies: ["Pro Dota"] }, {
  age: 22,
} as {
  name: string;
  age: number;
});

// Generic Functions

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value";
  if (element.length === 1) {
    descriptionText = "Got " + element.length + " elements";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements";
  }
  return [element, descriptionText];
}

console.log(mergedObj);
console.log(mergedObj2);

console.log(countAndDescribe("YELLowwww"));
console.log(countAndDescribe(["Dota", "Long walks to the refrigerator"]));

// The "keyof" Constraint

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "value " + obj[key];
}

console.log(extractAndConvert({ name: "Abed" }, "name"));

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

// Generic Classes

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];
  // private data: string | number | boolean[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Coffee");
textStorage.addItem("Milk");
textStorage.removeItem("Milk");

console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// const notailObj = { name: "Notail" };
// objStorage.addItem(notailObj);
// objStorage.addItem({ name: "Sumail" });
// //...
// objStorage.removeItem(notailObj);
// console.log(objStorage.getItems());

// Generic Utility Types

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ["Topson", "Ceb"];
// names.push("JerAx");

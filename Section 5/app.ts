class Department {
  // Field of a class
  // private id: string;
  // public name: string; // value type - you're basically assigning a type
  private employees: string[] = [];
  // definies the key you'll have in your object

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }
  // constructor is a reseved keyword understood by typescript

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }
  addEmployee(employee: string) {
    this.id = "d2";
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("d1", "Accounting"); // This is basically creating a new JAVASCRIPT OBJECT based on the blueprint

accounting.addEmployee("Insania");
accounting.addEmployee("Matumbaman");

// accounting.employees[2] = "Nisha"; // Wont work because its private

accounting.describe();
accounting.name = "NEW NAME";
accounting.printEmployeeInformation();

// console.log(accounting);

// accounting.addEmployee("Bryan");
// accounting.addEmployee("Kevin");

// accounting.describe();
// accounting.printEmployeeInformation();

// // const accountingCopy = { name: "DUMMY", describe: accounting.describe };

// // accountingCopy.describe();

// // // Question to myself

// // // why do we have to create a function within a class?

// ////////////////////////////////////////////////////////////////

// class MartialArtist {
//   striking: string;
//   grappling: string;

//   constructor(x: string, y: string) {
//     this.striking = x;
//     this.grappling = y;
//   }
// }

// const JonJones = new MartialArtist("Boxer", "Wrestler");

// // console.log(JonJones);

// //////////////////

//////////////////////////////////////////.

// TEST

// interface Fighter {
//   striking: string;
//   // grappling: string;
// }

// class Test implements Fighter {
//   public striking: string;
//   public grappling: string;

//   constructor(striking: string, grappling: string) {
//     this.striking = striking;
//     this.grappling = grappling;
//   }
// }

// class Test2 implements Fighter {
//   public striking: string;
//   public kicking: string;

//   constructor(striking: string, kicking: string) {
//     this.striking = striking;
//     this.kicking = kicking;
//   }
// }

// const arr1: Test[] = [];
// const arr2: Test2[] = [];
// const arr3: Fighter[] = [];

// const testObject1: Test = new Test("Muay Thai", "Jiu-Jitsu");
// const testObject2: Test2 = new Test2("Muay Thai", "Tae-Kwon-Do");
// const bryan: Test = new Test("Muay Thai", "Jiu-Jitsu");

// arr1.push(testObject1);
// arr2.push(bryan);
// arr3.push(bryan);
// arr3.push(testObject2);

// console.log(bryan);
// console.log(bryan.grappling);

// console.log(arr1);
// console.log(arr2);
// console.log(arr3);

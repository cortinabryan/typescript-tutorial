type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee extends Admin, Employee {} // its the same
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Bryan",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;

function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add("Topson", "Nisha");
result.split(" ");

const fetchedUserData = {
  id: "u1",
  name: "max",
  job: { title: "CEO", description: "My own bla bla bla" },
};

console.log(fetchedUserData?.job && fetchedUserData?.job?.title);

const userInput = "";

const storedData = userInput ?? "Default";

console.log("RIGHT HERE FOO");

console.log();

console.log("UP HERE FOO");
////////////////////////////////////////////////////////////////////////////////////////////////////

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log(`Name: + ${emp.name}`);
  if ("privileges" in emp) {
    console.log(`Privileges: ${emp.privileges}`);
  }
  if ("startDate" in emp) {
    console.log(`Privileges ${emp.startDate}`);
  }
}

printEmployeeInformation(e1);
printEmployeeInformation({ name: "Jenkins", startDate: new Date() });

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo ..." + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

// Discriminated Unions

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log("Moving at speed: " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });

// const paragraph = document.querySelector("p");
// const paragraph = document.getElementById("message-output");

// version 1 = I think this is the react version

// const userInputElement = <HTMLInputElement>(
//   document.getElementById("user-input")!
// );

// version 2

const userInputElement = document.getElementById(
  "user-input"
) as HTMLInputElement;

if (userInputElement) {
  (userInputElement as HTMLInputElement).value = "Hi there!";
}

interface ErrorContainer {
  // { email: 'Not a valid email', username: 'Must start with a character'}
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email!",
  username: "Must start with a capital character!",
};

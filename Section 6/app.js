"use strict";
var _a;
const e1 = {
    name: "Bryan",
    privileges: ["create-server"],
    startDate: new Date(),
};
function add(a, b) {
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
console.log((fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) && ((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title));
const userInput = "";
const storedData = userInput !== null && userInput !== void 0 ? userInput : "Default";
console.log("RIGHT HERE FOO");
console.log();
console.log("UP HERE FOO");
function printEmployeeInformation(emp) {
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
    loadCargo(amount) {
        console.log("Loading cargo ..." + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
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
const userInputElement = document.getElementById("user-input");
if (userInputElement) {
    userInputElement.value = "Hi there!";
}
const errorBag = {
    email: "Not a valid email!",
    username: "Must start with a capital character!",
};

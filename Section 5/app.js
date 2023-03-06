"use strict";
var add;
add = function (n1, n2) {
    return n1 + n2;
};
var Person = /** @class */ (function () {
    function Person(n) {
        this.age = 10;
        if (n) {
            this.name = n;
        }
    }
    Person.prototype.greet = function (msg) {
        if (this.name) {
            console.log(msg + " " + this.name);
        }
        else {
            console.log("yooo");
        }
    };
    return Person;
}());
var user1;
user1 = new Person();
user1.greet("Hello there my name is");
console.log(user1);

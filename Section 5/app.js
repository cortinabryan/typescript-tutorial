"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var EUTeam = /** @class */ (function () {
    // definies the key you'll have in your object
    function EUTeam(id, name) {
        this.id = id;
        this.name = name;
        // Field of a class
        // private id: string;
        // public name: string; // value type - you're basically assigning a type
        this.players = [];
        // this.id = id;
        // this.name = n;
    }
    // constructor is a reseved keyword understood by typescript
    EUTeam.prototype.describe = function () {
        console.log("EUTeam (".concat(this.id, "): ").concat(this.name));
    };
    EUTeam.prototype.addPlayer = function (player) {
        // this.id = "d2";
        this.players.push(player);
    };
    EUTeam.prototype.printPlayerInformation = function () {
        console.log(this.players.length);
        console.log(this.players);
    };
    return EUTeam;
}());
var USTeam = /** @class */ (function (_super) {
    __extends(USTeam, _super);
    function USTeam(id, coach) {
        var _this = _super.call(this, id, "Shopify Rebellion") || this;
        _this.coach = coach;
        return _this;
    }
    return USTeam;
}(EUTeam));
var SEATeam = /** @class */ (function (_super) {
    __extends(SEATeam, _super);
    function SEATeam(id, coach, waterboy, reports) {
        var _this = _super.call(this, id, "Talon") || this;
        _this.waterboy = waterboy;
        _this.coach = coach;
        _this.waterboy = waterboy;
        _this.lastReport = reports[0];
        return _this;
    }
    Object.defineProperty(SEATeam.prototype, "mostRecentReport", {
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error("No report found.");
        },
        set: function (value) {
            if (!value) {
                throw new Error("Please pass in a valid value!");
            }
            this.addReport(value);
        },
        enumerable: false,
        configurable: true
    });
    SEATeam.prototype.addPlayer = function (name) {
        if (name === "Bryan") {
            return;
        }
        this.players.push(name);
    };
    SEATeam.prototype.getWater = function (text) {
        this.waterboy.push(text);
    };
    SEATeam.prototype.addReport = function (text) {
        this.waterboy.push(text);
        this.lastReport = text;
    };
    return SEATeam;
}(EUTeam));
// Modern Way
// class USTeam extends EUTeam {
//   constructor(id: string, public coach: string[]) {
//     super(id, "IT");
//   }
// }
////////////////////////////////////////////////////////////'///////////////
// Liquid = EUTeam
// ShopifyRebellion = IT EUTeam
// Department = Liquid / EU Team
// ITDepartment = ShopifyRebellion / US Team
// AccountingDepartment = Talon / SEA Team
var Liquid = new EUTeam("div1", "Accounting"); // This is basically creating a new JAVASCRIPT OBJECT based on the blueprint
var ShopifyRebellion = new USTeam("div1", ["Bulba"]); // We're using the instanciated class which is the IT EUTeam
var Talon = new SEATeam("div1", ["SunBhie"], ["Kuku"], ["lol"]);
Liquid.addPlayer("Insania");
Liquid.addPlayer("Boxi");
Liquid.addPlayer("Zai");
Liquid.addPlayer("Nisha");
Liquid.addPlayer("Micke");
// Liquid.players[2] = "Nisha"; // Wont work because its private
Liquid.describe();
Liquid.name = "Liquid";
// Liquid.printPlayerInformation();
ShopifyRebellion.addPlayer("Fly");
ShopifyRebellion.addPlayer("Cr1t");
ShopifyRebellion.addPlayer("SaberLight");
ShopifyRebellion.addPlayer("Abed");
ShopifyRebellion.addPlayer("Arteezy");
// ShopifyRebellion.printPlayerInformation();
Talon.addPlayer("23Savage");
Talon.addPlayer("Mikoto");
Talon.addPlayer("Jabz");
Talon.addPlayer("Q");
Talon.addPlayer("Oli~");
Talon.getWater("Yoo get me some water");
Talon.addPlayer("Bryan");
Talon.addPlayer("Gabbi");
Talon.mostRecentReport = "Year End Report";
Talon.addReport("Something went wrong....");
console.log(Talon.mostRecentReport);
console.log(Liquid);
console.log(ShopifyRebellion);
console.log(Talon);
// console.log(Liquid);
// Liquid.addPlayer("Bryan");
// Liquid.addPlayer("Kevin");
// Liquid.describe();
// Liquid.printPlayerInformation();
// // const accountingCopy = { name: "DUMMY", describe: Liquid.describe };
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
////////////////////////////////////////////////////////////////////////////
// Copy
// class EUTeam {
//   // Field of a class
//   // private id: string;
//   // public name: string; // value type - you're basically assigning a type
//   private players: string[] = [];
//   // definies the key you'll have in your object
//   constructor(private readonly id: string, public name: string) {
//     // this.id = id;
//     // this.name = n;
//   }
//   // constructor is a reseved keyword understood by typescript
//   describe(this: EUTeam) {
//     console.log(`EUTeam (${this.id}): ${this.name}`);
//   }
//   addPlayer(player: string) {
//     // this.id = "d2";
//     this.players.push(player);
//   }
//   printPlayerInformation() {
//     console.log(this.players.length);
//     console.log(this.players);
//   }
// }
// class USTeam extends EUTeam {
//   coach: string[];
//   constructor(id: string, coach: string[]) {
//     super(id, "IT"); // super has to be called before this. keyword
//     this.coach = coach;
//   }
// }
// // Modern Way
// // class USTeam extends EUTeam {
// //   constructor(id: string, public coach: string[]) {
// //     super(id, "IT");
// //   }
// // }
// ////////////////////////////////////////////////////////////'///////////////
// // Liquid = EUTeam
// // ShopifyRebellion = IT EUTeam
// const Liquid = new EUTeam("d1", "Accounting"); // This is basically creating a new JAVASCRIPT OBJECT based on the blueprint
// const ShopifyRebellion = new USTeam("d1", "IT EUTeam"); // We're using the instanciated class which is the IT EUTeam
// Liquid.addPlayer("Insania");
// Liquid.addPlayer("Boxi");
// Liquid.addPlayer("Zai");
// Liquid.addPlayer("Nisha");
// Liquid.addPlayer("Micke");
// // Liquid.players[2] = "Nisha"; // Wont work because its private
// Liquid.describe();
// Liquid.name = "NEW NAME";
// Liquid.printPlayerInformation();
// ShopifyRebellion.addPlayer("Fly");
// ShopifyRebellion.addPlayer("Cr1t");
// ShopifyRebellion.addPlayer("SaberLight");
// ShopifyRebellion.addPlayer("Abed");
// ShopifyRebellion.addPlayer("Arteezy");
// ShopifyRebellion.printPlayerInformation();
// console.log(Liquid);
// console.log(ShopifyRebellion);

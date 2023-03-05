abstract class Team {
  static fiscalYear = 2023;
  // Field of a class
  // private id: string;
  // public name: string; // value type - you're basically assigning a type
  protected players: string[] = [];
  // definies the key you'll have in your object

  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }
  // constructor is a reseved keyword understood by typescript

  static createPlayer(name: string) {
    return { name: name };
  }

  abstract describe(this: Team): void;

  addPlayer(player: string) {
    // this.id = "d2";
    this.players.push(player);
  }
  printPlayerInformation() {
    console.log(this.players.length);
    console.log(this.players);
  }
}

class EUTeam extends Team {
  coach: string[];
  constructor(id: string, coach: string[]) {
    super(id, "Shopify Rebellion"); // super has to be called before this. keyword
    this.coach = coach;
  }
  describe() {
    console.log(`Welcome to EU - We are ${this.name} a ${this.id} team`);
  }
}

class USTeam extends Team {
  coach: string[];
  constructor(id: string, coach: string[]) {
    super(id, "Shopify Rebellion"); // super has to be called before this. keyword
    this.coach = coach;
  }
  describe() {
    console.log(`Welcome to USA - We are ${this.name} a ${this.id} team`);
  }
}

class SEATeam extends Team {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }

  coach: string[];
  constructor(
    id: string,
    coach: string[],
    private waterboy: string[],
    reports: string[]
  ) {
    super(id, "Talon");
    this.coach = coach;
    this.waterboy = waterboy;
    this.lastReport = reports[0];
  }

  describe() {
    console.log(`Welcome to SEA - We are ${this.name} a ${this.id} team`);
  }
  addPlayer(name: string) {
    if (name === "Bryan") {
      return;
    }
    this.players.push(name);
  }

  getWater(text: string) {
    this.waterboy.push(text);
  }

  addReport(text: string) {
    this.waterboy.push(text);
    this.lastReport = text;
  }
}

// Modern Way

// class USTeam extends Team {
//   constructor(id: string, public coach: string[]) {
//     super(id, "IT");
//   }
// }

////////////////////////////////////////////////////////////'///////////////

// Liquid = Team
// ShopifyRebellion = IT Team

// Department = Liquid / EU Team
// ITDepartment = ShopifyRebellion / US Team
// AccountingDepartment = Talon / SEA Team

const Liquid = new EUTeam("div1", ["Accounting"]); // This is basically creating a new JAVASCRIPT OBJECT based on the blueprint
const ShopifyRebellion = new USTeam("div1", ["Bulba"]); // We're using the instanciated class which is the IT Team
const Talon = new SEATeam("div1", ["SunBhie"], ["Kuku"], ["lol"]);

Liquid.addPlayer("Insania");
Liquid.addPlayer("Boxi");
Liquid.addPlayer("Zai");
Liquid.addPlayer("Nisha");
Liquid.addPlayer("Micke");

// Liquid.players[2] = "Nisha"; // Wont work because its private

Liquid.describe();
Liquid.name = "Liquid";
// Liquid.printPlayerInformation();

const player1 = Team.createPlayer("Arturito w/ a Durag");
console.log(player1, Team.fiscalYear);

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

Liquid.describe();
ShopifyRebellion.describe();
Talon.describe();

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

// class Team {
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

//   describe(this: Team) {
//     console.log(`Team (${this.id}): ${this.name}`);
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

// class USTeam extends Team {
//   coach: string[];
//   constructor(id: string, coach: string[]) {
//     super(id, "IT"); // super has to be called before this. keyword
//     this.coach = coach;
//   }
// }

// // Modern Way

// // class USTeam extends Team {
// //   constructor(id: string, public coach: string[]) {
// //     super(id, "IT");
// //   }
// // }

// ////////////////////////////////////////////////////////////'///////////////

// // Liquid = Team
// // ShopifyRebellion = IT Team

// const Liquid = new Team("d1", "Accounting"); // This is basically creating a new JAVASCRIPT OBJECT based on the blueprint
// const ShopifyRebellion = new USTeam("d1", "IT Team"); // We're using the instanciated class which is the IT Team

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

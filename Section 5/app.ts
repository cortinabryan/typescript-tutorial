interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable, Named {
  name?: string;
  age = 10;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(msg: string) {
    if (this.name) {
      console.log(msg + " " + this.name);
    } else {
      console.log("yooo");
    }
  }
}

let user1: Greetable;

user1 = new Person();

user1.greet("Hello there my name is");
console.log(user1);

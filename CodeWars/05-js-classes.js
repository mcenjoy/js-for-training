//============Geometry Basics: Circle Circumference in 2D================
//https://www.codewars.com/kata/58e43389acfd3e81d5000a88/train/javascript

const circleCircumference = (circle) =>
  parseFloat((2 * Math.PI * circle.radius).toFixed(6));

//====Fun with ES6 Classes #2 - Animals and Inheritance==================
//https://www.codewars.com/kata/56f935002e6c0d55fa000d92/train/javascript

class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, "shark", status);
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  }
  introduce() {
    return `${super.introduce()}  Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status);
    this.master = master;
  }
  greetMaster() {
    return `Hello ${this.master}`;
  }
}

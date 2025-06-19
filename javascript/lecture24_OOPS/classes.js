class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello my name is ${this.name}`);
  }
}

class student extends person {
  constructor(name, age, marks) {
    super(name, age);
    this.marks = marks;
  }

  greet() {
    console.log("this is overriden by student");
  }
}

class teacher extends person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }
}

let s1 = new student("dushyant", 21, 98);

s1.greet();
console.log(s1.marks);

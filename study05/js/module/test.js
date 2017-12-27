class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log('hello');
  }

  sayBye() {
    console.log('Bye');
  }

  sayName() {
    console.log(this.name);
  }

  check() {
    console.log(this);
  }

  showCard() {
    console.log("This is " + this.name + "'s card.");
  }
}

class student extends person {
  constructor(name, age, studentNumber, type = 'student') {
    super(name, age);
    this.type = type;
    this.studentNumber = studentNumber;
  }
}

class teacher extends person {
  constructor(name, age, teacherNumber, type = 'teacher') {
    super(name, age);
    this.type = type;
    this.teacherNumber = teacherNumber;
  }
}

const tom = new person('tom', 30);
tom.sayHello();
tom.sayName();

const bob = new person('bob', 35);
bob.sayHello();
bob.sayName();

const tomy = new student('tomy', 16, '00001');
tomy.sayHello();
tomy.sayName();
tomy.showCard();
tomy.check();

const jon = new teacher('jon', 60, '00002');
jon.showCard();
jon.check();

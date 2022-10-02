class Person {
  constructor(public firstName: string, public lastName: string) {
  }

  get fullName() {
    return  this.firstName + " " + this.lastName
  }

  walk() {
    console.log("walking")
  }
}

class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  takeTest() {
    console.log("Taking a Test")
  }
}

class Teacher extends Person {
  override get fullName() {
    return 'Professor ' + super.fullName
  }
}

class Principle extends Person {
  override get fullName(): string {
    return "principle " + super.fullName;
  }
}

function printName(people: Person[]) {
  for (let person of people)
    console.log(person.fullName)
}

printName([
  new Student(1, "Mohammad", "Poorjamal"),
  new Teacher("Mosh", "Hamedani"),
  new Principle("john", "smith")
])
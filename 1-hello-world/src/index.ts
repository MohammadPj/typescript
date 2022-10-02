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

let teacher = new Teacher('John', 'Smith')

console.log(teacher.fullName)
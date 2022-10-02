"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
    walk() {
        console.log("walking");
    }
}
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        console.log("Taking a Test");
    }
}
class Teacher extends Person {
    get fullName() {
        return 'Professor ' + super.fullName;
    }
}
class Principle extends Person {
    get fullName() {
        return "principle " + super.fullName;
    }
}
function printName(people) {
    for (let person of people)
        console.log(person.fullName);
}
printName([
    new Student(1, "Mohammad", "Poorjamal"),
    new Teacher("Mosh", "Hamedani"),
    new Principle("john", "smith")
]);
//# sourceMappingURL=index.js.map
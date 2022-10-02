class Person {
  private walk() {
    console.log("walk")
  }

  protected talk() {
    console.log("talk")
  }
}

class Student extends Person {
  doSomthing() {
    this.walk()
    this.talk()
  }
}

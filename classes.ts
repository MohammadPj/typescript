class Vehicle {
    drive(): void {
        console.log("it is driving")
    }

    honk(): void {
        console.log("Beep Beep")
    }
}

class Car extends Vehicle {
//  override methode drive
    drive():void {
        console.log("drive car")
    }

}

const car = new Car()
car.drive()
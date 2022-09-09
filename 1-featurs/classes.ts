class Vehicle {
  constructor(public color: string) {}
}

class Car extends Vehicle {
    constructor(public wheels: number, color: string) {
        super(color);
    }
}

const vehicle = new Vehicle("blue")
console.log("vehicle color is",vehicle.color)

const car = new Car(4, "black")
console.log("this car has",car.wheels, "wheels")
console.log("The car is ",car.color)
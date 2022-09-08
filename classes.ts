class Vehicle {
  constructor(public color: string) {}

  private honk(): void {
    console.log("Beep Beep");
  }
  protected break() {
    console.log("start break");
  }
}

class Car extends Vehicle {
    private drive():void {
        console.log("drive car")
    }

    startDriving() {
        this.drive()
        this.break()
    }
}

const vehicle = new Vehicle("blue")
console.log(vehicle.color)

const car = new Car("red")
car.startDriving()
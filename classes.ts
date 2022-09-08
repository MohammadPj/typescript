class Vehicle {
    //  متد های private رو حتی از children ها هم نمیشه صدا زد
    private honk(): void {
        console.log("Beep Beep")
    }
    //  متد های protected رو از children ها میشه صدا زد اما خارج از children نمیشه
    protected break() {
        console.log("start break")
    }
}

class Car extends Vehicle {
    // متد های private فقط از داخل همین کلاس صدا زده میشن
    //  متد های private فقط برای این استفاده میشن که سایر دولوپر ها به اشتباه این متد رو صدا نزنن و استفاده نادرست نکنن
    //  در اصل نمی خوایم بقیه دولوپر ها این متد ها رو صدا بزنن
    private drive():void {
        console.log("drive car")
    }

    startDriving() {
        this.drive()
        this.honk()
        this.break()
    }
}

const car = new Car()
car.startDriving()
car.break()
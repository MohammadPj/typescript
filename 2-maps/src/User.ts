import { faker } from '@faker-js/faker';

class User {
    name: string;
    loacation: {
        lat: number;
        lng: number
    }
    constructor() {
        this.name = faker.name.firstName("male")
        this.loacation = {
            lat: +faker.address.latitude(),
            lng: +faker.address.longitude()
        }
    }
}
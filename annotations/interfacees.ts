interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
  summary(): string {
    return `Name ${this.name}`;
  },
};

//  long annotation problem XXX
// const printVehicle = (vehicle: {
//   name: string;
//   year: number;
//   broken: boolean;
// }) => {
//   console.log("Name", vehicle.name);
//   console.log("Year", vehicle.year);
//   console.log("broken", vehicle.broken);
// };

//  fix long annotation with interface
const printVehicle = (vehicle: Vehicle) => {
    console.log(vehicle.summary())
};

printVehicle(oldCivic);

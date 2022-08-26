interface Vehicle {
    name: string,
    year: number,
    broken: boolean
}

const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
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
    console.log("Name", vehicle.name);
    console.log("Year", vehicle.year);
    console.log("broken", vehicle.broken);
};

printVehicle(oldCivic);


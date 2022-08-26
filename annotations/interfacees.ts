interface Reportable {
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

//  fix long annotation with interface
const printSummary = (item: Reportable) => {
    console.log(item.summary())
};

printSummary(oldCivic);

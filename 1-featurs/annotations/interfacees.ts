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

const drink = {
    color: "brown",
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar`
    }
}

//  fix long annotation with interface
const printSummary = (item: Reportable) => {
    console.log(item.summary())
};

printSummary(oldCivic);
printSummary(drink);

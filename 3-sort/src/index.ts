class Sorter {
  //  old syntax
  // collection: number[];
  // constructor(collection: number[]) {
  //   this.collection = collection
  // }

  //  new syntax
  constructor(public collection: number[]) {}

  sort(): void {

  }
}

const sorter = new Sorter([10, 3, -5, 0]);

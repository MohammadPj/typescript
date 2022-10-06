interface IProduct {
  name: string;
  price: number;
}

class Store<T> {
  protected _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj);
  }
  find(property: keyof T, value: unknown): T | undefined {
    return this._objects.find((obj) => obj[property] === value);
  }
}

let store = new Store<IProduct>();

store.add({ name: "Mosh", price: 200 });

store.find("name", "Mosh");
store.find("price", 200);
store.find("unknownProperty", "asd");

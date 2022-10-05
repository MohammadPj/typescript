// Abstract Classes and Methods

abstract class Shape {
  protected constructor(public color: string) {
  }

  abstract render(): void;
}


class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color);
  }

  override render(): void {
    console.log("Rendering a circle");
  }
}

let shape = new Shape("red");

// type annotation
let applesCount: number = 5;
let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

//  built in objects
let now: Date = new Date();

//  Array
let colors: string[] = ["red", "green", "blue"];
let myNaumbers: number[] = [1, 2, 3];
let truths: boolean[] = [false, true];
let persons: { name: string }[] = [{ name: "mohammad" }];

// Classes
class Car {}
const car: Car = new Car();

//  Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//  Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//  When to use Annotations
//  1) Function that return any type like JSON.parse
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);

const x = coordinates.x;

//  2) when we declare a variable on one line
//  and initialize it later
let words = ["red", "blue", "yellow"];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "blue") {
    foundWord = true;
  }
}

//  3) variables whose type can not be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}

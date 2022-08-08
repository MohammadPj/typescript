//  When to use Annotations
//  1) Function that return any type like JSON.parse
const json = '{"x": 10, "y": 20}';
const coordinates: {x: number, y: number} = JSON.parse(json)

const x = coordinates.x

//  2) when we declare a variable on one line
//  and initialize it later
let words = ['red', 'blue', 'yellow']
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
    if (words[i] === "blue") {
        foundWord = true
    }
}

//  3) variables whose type can not be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i]
    }
}
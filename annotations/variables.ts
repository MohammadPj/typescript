// type annotation
let applesCount : number = 5
let speed: string = "fast"
let hasName: boolean = true

let nothingMuch: null = null
let nothing: undefined = undefined

//  built in objects
let now: Date = new Date()

//  Array
let colors: string[] = ["red", "green", "blue"]
let myNaumbers: number[] = [1,2,3]
let truths: boolean[] = [false, true]
let persons: {name: string}[] = [{name: "mohammad"}]

// Classes
class Car {

}
const car: Car = new Car()

//  Object literal
let point: {x: number; y: number} = {
    x: 10,
    y: 20,
}

//  Function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i)

}
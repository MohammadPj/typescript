//  mistake without use annotation for return
const add = (a: number, b: number) => {
    a + b
}

//  correct
const abstract = (a: number, b: number): number => {
   return  a - b
}

function divide(a: number, b: number): number {
    return a / b
}

const multiply = function (a: number, b: number): number {
    return a * b
}
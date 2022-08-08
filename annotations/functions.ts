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

//  برای توابعی که Return ندارن
const logger = (message: string): void => {
    console.log(message)
}

//  برای توابعی که هیچ وقت کامل اجرا نمیشن
const throwError = (message: string): never => {
    throw new Error(message)
}
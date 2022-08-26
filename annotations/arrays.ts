const carMakers: string[] = ["ford", "toyota", "jac"];

//  2 dimensional arrays
const carModels: string[][] = [["f16"], ["carolla", "highlux"], ["s3", "s5"]];

//  Help with inference when extracting values
const car = carMakers[0]
const myCar = carMakers.pop()

//  Prevent incompatible values
carMakers.push(1)

//  Help with map
carMakers.map((car: string): string => {
    return car
})

//  Flexible types
const importantDates: (string | Date)[] = [new Date(), "2022-8-8"]


// function processEvents(): never {
//   while (true) {
//     //  read a message from a queue
//   }
// }

function reject(message: string): never {
  throw new Error(message)
}

reject("we have an Error")
// processEvents()
console.log("salam")
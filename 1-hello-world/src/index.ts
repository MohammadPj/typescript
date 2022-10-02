class Button {
  private static _count: number = 0

  increment() {Button._count++}

  static get count() {
    return Button._count
  }
}

let btn1 = new Button()
let btn2 = new Button()

btn1.increment()
btn2.increment()

console.log("count", Button.count)

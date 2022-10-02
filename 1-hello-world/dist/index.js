"use strict";
class Button {
    increment() { Button._count++; }
    static get count() {
        return Button._count;
    }
}
Button._count = 0;
let btn1 = new Button();
let btn2 = new Button();
btn1.increment();
btn2.increment();
console.log("count", Button.count);
//# sourceMappingURL=index.js.map
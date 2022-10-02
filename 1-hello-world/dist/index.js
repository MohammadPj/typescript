"use strict";
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        this._balance = value;
    }
    deposit(amount) {
        if (amount < 0)
            throw new Error("invalid amount");
        this._balance += amount;
    }
}
let account = new Account(10, "mohammad", 0);
account.deposit(100);
account.balance = 200;
console.log("balance", account.balance);
//# sourceMappingURL=index.js.map
"use strict";
class Account {
    constructor(id, owner, balance) {
        this._balance = balance;
        this.id = id;
        this.owner = owner;
    }
    getBalance() {
        return this._balance;
    }
    deposit(amount) {
        if (amount < 0)
            throw new Error('invalid amount');
        this._balance += amount;
    }
}
let account = new Account(10, "mohammad", 0);
account.deposit(100);
console.log("balance", account.getBalance());
//# sourceMappingURL=index.js.map
"use strict";
class Account {
    constructor(id, owner, balance) {
        this.balance = balance;
        this.id = id;
        this.owner = owner;
    }
    diposite(amount) {
        if (amount < 0)
            throw new Error('invalid amount');
        this.balance += amount;
    }
}
let account = new Account(10, "mohammad", 0);
account.diposite(100);
console.log(account instanceof Account);
//# sourceMappingURL=index.js.map
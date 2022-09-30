"use strict";
class Amount {
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
//# sourceMappingURL=index.js.map
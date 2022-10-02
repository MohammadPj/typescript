class Account {
  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {}

  get balance () {
    return this._balance;
  }

  set balance(value) {
    this._balance = value
  }

  deposit(amount: number): void {
    if (amount < 0) throw new Error("invalid amount");
    this._balance += amount;
  }
}

let account = new Account(10, "mohammad", 0);

account.deposit(100);
account.balance = 200
console.log("balance", account.balance);

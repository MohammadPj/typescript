class Account {
  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {}

  getBalance() {
    return this._balance;
  }

  deposit(amount: number): void {
    if (amount < 0) throw new Error("invalid amount");
    this._balance += amount;
  }
}

let account = new Account(10, "mohammad", 0);

account.deposit(100);
console.log("balance", account.getBalance());

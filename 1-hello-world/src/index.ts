class Account {
  readonly id: number;
  owner: string;
  balance: number
  nickName?: string

  constructor(id: number, owner: string, balance: number) {
    this.balance = balance
    this.id = id
    this.owner = owner
  }

  diposite(amount: number): void {
    if (amount < 0)
      throw new Error('invalid amount')
    this.balance += amount
  }
}

let account = new Account(10, "mohammad", 0)

account.diposite(100)
console.log(account instanceof Account)
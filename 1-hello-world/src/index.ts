class Amount {
  id: number;
  owner: string;
  balance: number

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
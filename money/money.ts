export class Money {
  protected amount: number
  constructor(amount: number) {
    this.amount = amount
  }

  equals(money: Money) {
    return (
      money.constructor.name === this.constructor.name &&
      this.amount === money.amount
    )
  }
}

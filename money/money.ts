export abstract class Money {
  protected amount: number
  protected currency: string
  constructor(amount: number, currency: string) {
    this.amount = amount
    this.currency = currency
  }

  equals(money: Money) {
    return (
      money.constructor.name === this.constructor.name &&
      this.amount === money.amount
    )
  }
  getCurrency() {
    return this.currency
  }
  abstract times(multiplayer: number): Money

}

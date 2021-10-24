export class Money {
  protected amount: number

  equals(money: Money) {
    return (
      money.constructor.name === this.constructor.name &&
      this.amount === money.amount
    )
  }
}
